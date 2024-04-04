# Authentication token

Every API call requires authentication. Bearer token can be accessed in two ways

## 1) Login through browser

To access the auth token from the browser's local storage, login with your
admin-approved credentials and follow the instructions below.

### Access through local storage

<https://github.com/edcsdev/api_backend/assets/22231510/e86d3f98-a548-4da2-b59c-6cffa4fdd7a0>

To access the auth token from the browser's network tab, login with your
admin-approved credentials and follow the instructions below.

### Access through Browser's network tab

<https://github.com/edcsdev/api_backend/assets/113642858/d43ffa09-3590-4280-bc91-b84f6082f963>

## 2) Using postman

To access the login API, navigate to application-url (<https://noisrucer.onrender.com/api/login>) in postman and
enter your user credentials in json format, as shown below. Then, utilize the token
provided in the response.

**Sample Input:**

```json
{
  "username": "prod-user",
  "password": "*******"
}
```

**Sample Output:**

![image](https://github.com/edcsdev/api_backend/assets/113642858/3b840874-3c97-4e4a-9e29-9558fbb8b714)
