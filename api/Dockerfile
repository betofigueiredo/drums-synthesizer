FROM python:3.10

ENV HOME=/home

WORKDIR $HOME/drums_api/

COPY ./requirements.txt $HOME/drums_api/

RUN pip install --upgrade pip

RUN pip install --no-cache-dir --trusted-host pypi.python.org --upgrade -r requirements.txt

COPY . $HOME/drums_api/

EXPOSE 8000

CMD ["python", "main.py"]
