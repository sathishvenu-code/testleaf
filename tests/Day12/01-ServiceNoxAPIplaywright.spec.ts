import { test } from "@playwright/test";

test(`Test to create a new incident in service now using API`, async({request})=>{

    const response = await request.post("https://dev186929.service-now.com/api/now/table/incident",
        {
            headers:{
                "Authorization" : "YWRtaW46MkFxak4hbEMyIVZ5",
                "Content-Type" : "application/json"
            },
            data:{                
                    "short_description": "Created using Playwright API"                
            }
        }
    )

    // To get the JSON response
    const responseBody = await response.json();
    console.log(`The status code is ${responseBody.status}`);

})