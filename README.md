# ToDo App NestJs

## Api Docs

#### Returns All Tasks

```http
  GET /task/read
```

#### Create A Task

```http
  POST /task/create
```

| Params   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `text`      | `string` | **Required**. Insert task content here |

#### Update Task

```http
  PUT /task/update
```

| Params   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Required**. Id of the task which will be modified |
| `text`      | `string` | **Required**. Insert new task content here |

#### Delete Task

```http
  DELETE /task/delete
```

| Params   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Required**. Id of the task which will be deleted |

#### .env String Connection MongoDB

```bash
mongodb+srv://root:<password>@cluster0.ab1cd.mongodb.net/myDatabase?retryWrites=true&w=majority
```

## References

 - [Nest.js Documentation](https://docs.nestjs.com)
 - [React.js Documentation](https://react.dev)
 - [Typescript Documentation](https://www.typescriptlang.org/docs/) 
## Author

- [@marcelldac](https://www.github.com/marcelldac)
