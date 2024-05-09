# How to call APIs from C# code

Please refer to the below sample code to store game logs using C#.

- Save Logs using POST method [URL](https://noisrucer.onrender.com/api/logs).
  Sample input JSON for the post method [here](/Documentation/LogAPIs.md)
- Fetch Logs using GET method [URL](https://noisrucer.onrender.com/api/logs)
  
```csharp
    using System;
    using System.Net.Http;
    using System.Threading.Tasks;

    class LogsApi
    {
        // Method to store logs in the database
        public static async Task SaveLogs(string apiUrl, string payload)
        {
            using (HttpClient client = new HttpClient())
            {
                try
                {
      client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer","<Token generated through login api>");
                    HttpContent content = new StringContent(payload, System.Text.Encoding.UTF8, "application/json");
                    HttpResponseMessage response = await client.PostAsync(apiUrl, content);

                    if (response.IsSuccessStatusCode)
                    {
                        Console.WriteLine("Logs stored successfully!");
                    }
                    else
                    {
                        Console.WriteLine("Failed to store logs in the database. Status code: " + response.StatusCode);
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("An error occurred while storing logs: " + ex.Message);
                }
            }
        }
        // Method to fetch logs from the database
 public static async Task<string> GetLogs(string apiUrl)
     {
         using (HttpClient client = new HttpClient())
         {
             try
             {
   client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer","<Token generated through login api>");
   HttpResponseMessage response = await client.GetAsync(apiUrl);
 
                 if (response.IsSuccessStatusCode)
                 {
                     string responseData = await response.Content.ReadAsStringAsync();
                     return responseData;
                 }
                 else
                 {
                     Console.WriteLine("Failed to fetch logs from the database. Status code: " + response.StatusCode);
                     return null;
                 }
             }
             catch (Exception ex)
             {
                 Console.WriteLine("An error occurred while fetching logs: " + ex.Message);
                 return null;
             }
         }
     }
    }

    class Logs
    {
        static async Task Main(string[] args)
        {
            // URL of the API to save logs (Refer POST method)
            string saveLogsUrl = "https://noisrucer.onrender.com/api/logs";
     // URL of the API to get logs (Refer GET method)
            string getLogsUrl = "https://noisrucer.onrender.com/api/logs";

            // JSON payload to store in the database. (Refer Sample JSON)
            string payload = "{\"token\":\"prod-test\",\"metricsList\":[{\"TimeStamp\":\"3/1/2024 11:55:17 AM\",\"UserInteraction\":\"levelName:default_level.json\"},{\"TimeStamp\":\"3/1/2024 11:55:18 AM\",\"UserInteraction\":\"category:MovementCommandPaletteButton\"},{\"TimeStamp\":\"3/1/2024 11:55:18 AM\",\"UserInteraction\":\"command: {\\\"move\\\":\\\"MOVE_FORWARD\\\", \\\"leftChild\\\":null, \\\"rightChild\\\":null, \\\"parent\\\":null, \\\"parentAlt\\\":null, \\\"isRemovable\\\":true, \\\"isSlot\\\":false}\"}]}";

            // Execute a method to save logs in the database from LogsAPi class
            await LogsApi.SaveLogs(saveLogsUrl, payload);

     // Execute a method to get logs in the database from LogsAPi class
            await LogsApi.GetLogs(getLogsUrl);
        }
    }
```
