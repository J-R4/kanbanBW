ENDPOINT:

1. `POST /login`
2. `POST /register`
3. `GET /todos`
4. `POST /todos`
5. `GET /todos/:id`
6. `PUT /todos/:id`
7. `PATCH /todos/:id`
8. `DELETE /todos/:id`
9. `POST /oAuth/`

## 1. `POST /login`

Description =
User login with email and password

Request =

-   headers =

not needed

-   body =

        ```json
        {
          "email": "<email>",
          "password": "<password>"
        }
        ```

    Response (200 - OK) =

```json
{
    "access_token": "<access token>"
}
```

Response (500 - Internal Server Error)

```json
{
    "message": "<internal server Error message>"
}
```

## 2. `POST /register`

Description =
new User can register with unique email and their password

Request =

-   headers =
    not needed

-   body =

    ```json
    {
        "email": "<email>",
        "password": "<password>"
    }
    ```

Response (201 - CREATED) =

```json
{
    "email": "<email by user>"
}
```

Response (400 - BAD REQUEST) =

```json
{
    "message": "<bad request message>"
}
```

## 3. `GET /todos`

Description =

User can get list of all the todos

Request =

-   headers =

    {
    "access_token": "<access token>"
    }

-   body =

    not needed

Response (200 - OK) =

```json
{
    "id": "<given id by system>",
    "title": "<todos title>",
    "description": "<todos description>",
    "status": "<todos status>",
    "due_date": "<todos due_date>",
    "UserId": "<todos association>",
    "createdAt": "<date by system>",
    "updatedAt": "<date by system>"
}
```

Response (404 - NOT FOUND) =

```json
{
    "message": "<Not Found message>"
}
```

## 4. POST /todos`

Description =

User can create their own todo

Request =

-   headers =

    {
    "access_token": "<access token>"
    }

-   body =

    {
    "title": "<todos title>",
    "description": "<todos description>",
    "status": "<todos status>",
    "due_date": "<todos due_date>"
    }

Response (201 - CREATED) =

{
"obj": {
"title": "<todos title>",
"description": "<todos description>",
"status": "<todos status>",
"due_date": "<todos due_date>"
}
}

Response (400 - BAD REQUEST) =

```json
{
    "message": "<bad request message>"
}
```

Response (500 - INTERNAL SERVER ERROR) =

```json
{
    "message": "<internal server message>"
}
```

## 5. `GET /todos/:id`

Description =

User can get todos by the id

Request =

-   headers =

    {
    "access_token": "<access token>"
    }

-   body =

    not needed

Response (200 - OK ) =

```json
{
    "id": "<given id by system>",
    "title": "<todos title>",
    "description": "<todos description>",
    "status": "<todos status>",
    "due_date": "<todos due_date>",
    "UserId": "<todos association>",
    "createdAt": "<date by system>",
    "updatedAt": "<date by system>"
}
```

Response (404 - NOT FOUND) =

```json
{
    "message": "<not found message>"
}
```

## 6. `PUT /todos/:id`

Description =

User can update the todos according to its id

Request =

-   headers =

    {
    "access_token": "<access token>"
    }

-   body =

    {
    "title": "<todos title>",
    "description": "<todos description>",
    "status": "<todos status>",
    "due_date": "<todos due_date>"
    }

Response (200 - OK ) =

```json
{
    "id": "<given id by system>",
    "title": "<todos title>",
    "description": "<todos description>",
    "status": "<todos status>",
    "due_date": "<todos due_date>",
    "UserId": "<todos association>",
    "createdAt": "<date by system>",
    "updatedAt": "<date by system>"
}
```

Response (400 - BAD REQUEST) =

```json
{
    "message": "bad request message"
}
```

Response (500 - INTERNAL ERROR) =

```json
{
    "message": "<internal error message>"
}
```

## 7. `PATCH /todos/:id`

Description =

User can update the status of todos to become finished / work in progress / unfinished

Request =

-   header =

{
"access_token": "<access token>"
}

-   body =

(radio button)

{
"status": "<value of the selection between finished or work in progress or unfinished>"
}

Response (200 - OK) =

```json
{
    "id": "<given id by system>",
    "title": "<todos title>",
    "description": "<todos description>",
    "status": "<todos status depends of the chosen value of the selection>",
    "due_date": "<todos due_date>",
    "UserId": "<todos association>",
    "createdAt": "<date by system>",
    "updatedAt": "<date by system>"
}
```

Response (400 - BAD REQUEST) =

```json
{
    "message": "<bad request message>"
}
```

Response (404 - NOT FOUND) =

```json
{
    "message": "<not found message>"
}
```

Response (500 - INTERNAL ERROR) =

```json
{
    "message": "<internal error message>"
}
```

## 8. `DELETE /todos/:id`

Description =

User can delete the todos by their selection according to its id

Request =

-   header =
    {
    "access_token": "<access token>"
    }

-   body =
    not needed

Response (200 - OK) =

```json
{
    "message": "<delete message>"
}
```

Response (404 - NOT FOUND) =

```json
{
    "message": "<not found message>"
}
```

response (500 - INTERNAL SERVER ERROR) =

```json
{
    "message": "<internal server error message>"
}
```

## 9. `POST /oAuth`

Description =

User can login with their own Google Account

Request =

-   header =
    {
    "access_token": "<access token>"
    }

-   body =
    not needed

Response (200 - OK) =

```json
{
    "message": "<delete message>"
}
```

Response (404 - NOT FOUND) =

```json
{
    "message": "<not found message>"
}
```

response (500 - INTERNAL SERVER ERROR) =

```json
{
    "message": "<internal server error message>"
}
```
