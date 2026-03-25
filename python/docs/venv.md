# Virtual Environment (venv) Documentation

1. Create a virtual environment:
   ```bash
   python -m venv .venv
   ```

2. Activate the virtual environment:
    - On Windows:
      ```bash
      .venv\Scripts\activate
      ```
    - On Unix or MacOS:
      ```bash
      source .venv/bin/activate
      ```

3. Install dependencies:
   ```bash
    pip install -r requirements.txt
    ```

4. Freeze the current state of the environment:
   ```bash
   pip freeze > requirements.txt
   ```

5. Deactivate the virtual environment:
   ```bash
   deactivate
   ```
