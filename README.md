# Mini Project Assignment: Building a URL Shortener Service with Typescript and Express.js

## Description

An API for shortening URL

## Library

1. [typescript](https://www.npmjs.com/package/typescript)
2. [express](https://www.npmjs.com/package/express)
3. [shortid](https://www.npmjs.com/package/shortid)

## How to run

1. Clone this repository
2. Install dependency with `npm i`
3. Run `npm run dev`

## API

### `GET` /shorten/:short_url

**Request Params**

```json
{
  "short_url": "-nd2GsJ_6"
}
```

**Response - Success**

```json
Redirected to new url
```

**Response - Failed**

```json
{
  "success": false,
  "status": 404,
  "message": "short_url not found"
}
```

### `POST` /shorten

**Request Body**

```json
{
  "url": "https://google.com"
}
```

**Response - Success**

```json
{
  "success": true,
  "status": 200,
  "message": "URL shortened successfully",
  "data": {
    "short_url": "-nd2GsJ_6",
    "long_url": "https://google.com"
  }
}
```

**Response - Failed**

```json
{
  "success": false,
  "status": 400,
  "message": ""
}
```
