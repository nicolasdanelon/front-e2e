import os
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException, TimeoutException

chromedriver_path = 'chrome-data/preact-e2e'


def setup_driver(session):
    chrome_options = Options()
    chrome_options.add_argument(
        f'user-data-dir={os.path.join(os.getcwd(), session)}')
    chrome_options.add_argument("--disable-dev-shm-usage")
    # comment to see browser's window
    chrome_options.add_argument("--headless=new")
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument("--no-sandbox")
    return webdriver.Chrome(options=chrome_options)


session = os.path.join(chromedriver_path)
browser = setup_driver(session)
BASE_URL = "https://preact-e2e.vercel.app/"

print('OPEN URL')

browser.get(BASE_URL)

try:
    wait = WebDriverWait(browser, 5)
    print('LOAD: Wait until website load')

    button = wait.until(EC.presence_of_element_located(
        (By.XPATH, "//button[@class='btn']")))
    print('FIND: Get call to action')

    initial_text = browser.find_element(
        By.XPATH, "//p[@class='w-full text-base-content']").text
    print('READ: Get target text')

    # click
    button.click()
    print('ACTION: Trigger text change')

    # wait til text changes
    wait.until_not(EC.text_to_be_present_in_element(
        (By.XPATH, "//p[@class='w-full text-base-content']"), initial_text))

    # capture new text
    new_text = browser.find_element(
        By.XPATH, "//p[@class='w-full text-base-content']").text
    print('READ: Get target text')

    # check
    if initial_text != new_text:
        print("\n[  OK  ] Text has changed")
    else:
        print("\n[ ERRO ] Text dind't change")

except NoSuchElementException as e:
    print("Error: Button not found", e)
except TimeoutException as e:
    print("Error: Timeout. Text didn't change after click", e)
finally:
    browser.quit()
