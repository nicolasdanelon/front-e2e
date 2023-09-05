import { useState, useCallback } from 'preact/compat';
import { Button } from 'react-daisyui';

export function App() {
  const [loading, setLoading] = useState(false);
  const [title, setTtile] = useState('Just a title');
  const [description, setDescription] = useState('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, repudiandae omnis distinctio laudantium placeat velit cupiditate quam recusandae tempore reiciendis');

  const handleChange = useCallback(() => {
    setLoading(true)
    const limit = Math.floor(Math.random() * 4) + 1 * 1000;
    const timer = setInterval(() => {
      setTtile('Chuck Norris Facts');
      setDescription('Chuck Norris is ten feet tall, weighs two-tons, breathes fire, and could eat a hammer and take a shotgun blast standing If you spell Chuck Norris in Scrabble, you win.')
      setLoading(false)
    }, limit);

    setTimeout(() => {
      clearInterval(timer);
    }, limit);
  }, []);

  const text = loading ? 'wait..' : 'Give me chuck';

  return (
    <div className="w-full h-full my-4">
      <div
        className="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box
                    flex min-h-[6rem] min-w-[18rem] flex-wrap items-center justify-center gap-2
                    overflow-x-hidden overflow-y-hidden border bg-cover bg-top p-4 m-10"
      >
        <h1 className="w-full text-4xl text-base-content font-bold">{title}</h1>
        <p className="w-full text-base-content">{description}</p>
        <div className="my-4">
          <Button onClick={handleChange}>{text}</Button>
        </div>
      </div>
    </div>
  );
}
