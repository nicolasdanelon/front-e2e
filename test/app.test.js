import { beforeEach, it, describe, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/preact';
import { act } from 'preact/test-utils';
import { App } from '../src/app.jsx';

vi.useFakeTimers();

beforeEach(() => {
  render(<App />);
})

describe('<App />', () => {
  it('should render initial state correctly', () => {
    expect(screen.getByText('Just a title')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, repudiandae omnis distinctio laudantium placeat velit cupiditate quam recusandae tempore reiciendis')).toBeInTheDocument();
    expect(screen.getByText('Give me chuck')).toBeInTheDocument();
  });

  it('should handle button click', () => {
    act(() => {
      fireEvent.click(screen.getByText('Give me chuck'));
    });

    expect(screen.getByText('wait..')).toBeInTheDocument();
  });

  it('should update title and description after button click', () => {
    act(() => {
      fireEvent.click(screen.getByText('Give me chuck'));
      vi.advanceTimersByTime(5000)
    });

    expect(screen.getByText('Chuck Norris Facts')).toBeInTheDocument();
    expect(screen.getByText('Chuck Norris is ten feet tall, weighs two-tons, breathes fire, and could eat a hammer and take a shotgun blast standing If you spell Chuck Norris in Scrabble, you win.')).toBeInTheDocument();
  });

  it('should reset loading state after button click', () => {
    act(() => {
      fireEvent.click(screen.getByText('Give me chuck'));
      vi.advanceTimersByTime(5000);
    });

    expect(screen.getByText('Give me chuck')).toBeInTheDocument();
  });
});
