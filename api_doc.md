ENDPOINT:

1. `POST /login`
2. `POST /register`
3. `GET /tasks`
4. `POST /tasks`
5. `GET /tasks/:id`
6. `PUT /tasks/:id`
7. `PATCH /tasks/:id`
8. `DELETE /tasks/:id`
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
          "email": "<email - string>",
          "password": "<password - string>"
        }
        ```

    Response (200 - OK) =

```json
{
    "access_token": "<access token>"
}
```

    Response (400 - BAD REQUEST) =

```json
{
    "access_token": "<email / password is wrong>"
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
        "email": "<email - string>",
        "password": "<password - string>"
    }
    ```

Response (201 - CREATED) =

```json
{
    "id": "<id by system>",
    "email": "<email by user>"
}
```

Response (400 - BAD REQUEST) =

```json
{
    "message": "<bad request message>"
}
```

Response (500 - Internal Server Error)

```json
{
    "message": "<internal server Error message>"
}
```

## 3. `GET /tasks`

Description =

User can get list of all the tasks

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
    "title": "<tasks title>",
    "category": "<tasks category>",
    "createdAt": "<date by system>",
    "updatedAt": "<date by system>",
    "UserId": "<tasks association>"
}
```

Response (404 - NOT FOUND) =

```json
{
    "message": "<Not Found message>"
}
```

Response (500 - Internal Server Error)

```json
{
    "message": "<internal server Error message>"
}
```

## 4. POST /tasks`

Description =

User can create their own todo

Request =

-   headers =

    {
    "access_token": "<access token>"
    }

-   body =

    {
    "title": "<tasks title - string>",
    "description": "<tasks description - string>",
    }

Response (201 - CREATED) =

{
  "theData": {
    "id": "<id>",
    "title": "<title>",
    "category": "<category>",
    "UserId": "<UserId>",
    "updatedAt": "<date by system>",
    "createdAt": "<date by system>"
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

## 5. `GET /tasks/:id`

Description =

User can get tasks by the id (+req.params.id)

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
    "title": "<tasks title>",
    "category": "<tasks category>",
    "createdAt": "<date by system>",
    "updatedAt": "<date by system>",
    "UserId": "<tasks association>"
}
```

Response (404 - NOT FOUND) =

```json
{
    "message": "<not found message>"
}
```

Response (500 - INTERNAL SERVER ERROR) =

```json
{
    "message": "<internal server message>"
}
```

## 6. `PUT /tasks/:id`

Description =

User can update the tasks according to its id (+req.params.id)

Request =

-   headers =

    {
    "access_token": "<access token>"
    }

-   body =

    {
    "title": "<tasks title - string>",
    "category": "<tasks category - string>",
    }

Response (200 - OK ) =

```json
{
    "id": "<given id by system>",
    "title": "<tasks title>",
    "category": "<tasks category>",
    "createdAt": "<date by system>",
    "updatedAt": "<date by system>",
    "UserId": "<tasks association>"
}
```

Response (400 - BAD REQUEST) =

```json
{
    "message": "bad request message"
}
```

Response (404 - DATA NOT FOUND) =

```json
{
    "message": "data not found message"
}
```

Response (500 - INTERNAL ERROR) =

```json
{
    "message": "<internal error message>"
}
```

## 7. `PATCH /tasks/:id`

Description =

User can update the category of tasks to become backlog / todo / doing / done

Request =

-   header =

{
"access_token": "<access token>"
}

-   body =

{
"category": "<value of the selection between backlog or todo or doing or done>"
}

Response (200 - OK) =

```json
{
    "id": "<given id by system>",
    "title": "<tasks title>",
    "category": "<tasks category>",
    "createdAt": "<date by system>",
    "updatedAt": "<date by system>",
    "UserId": "<tasks association>"
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

## 8. `DELETE /tasks/:id`

Description =

User can delete the tasks by their selection according to its id

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

```json
{
    "google_token": "<google_token provided by google - string>"
}
```

Response (200 - OK) =

```json
{
    "id": "<id by system>",
    "email": "<email by user>",
    "access_token": "<access_token>"
}
```

response (500 - INTERNAL SERVER ERROR) =

```json
{
    "message": "<internal server error message>"
}
```
