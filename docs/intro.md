---
sidebar_position: 1
---

# Zaroc Intro

Let's discover **how Zaroc help us with Chatbot Backends**.

## Getting Started

Get started by **Creating our chatbot Throught Dialogflow and Connecting to Zaroc**.

Or **Look at this Tutorial** with **[Mizar](https://zaroc.netlify.app)**.

## 1.- Create a Chatbot on Dialogflow

First Lets Create our Chatbot on Dialogflow [**HERE**](https://dialogflow.cloud.google.com/)

##### INFO REQUIRED

If you got your Chatbot connected and working as expected Let's go to the next part!

## 2.- Setting Zaroc & Bot Templates

##### Remember that you need a PHP server Running online

To build your Chatbot backend faster we recommend you to download Zaroc and a Chatbot Template

Download Zaroc [**HERE**](https://dialogflow.cloud.google.com/)

Download Bot Template [**HERE**](https://dialogflow.cloud.google.com/)

==================================================

On your root folder, create a folder named **Chatbots**, Insert Zaroc and the Bot Template

After that, your folders should have this order

```shell
root

└───Chatbot
    │   Zaroc
    │   ChatbotTemplate
```

Now, lets check that our chatbotExample is requiring Zaroc

Inside of the Folder of your ChatbotExample you should see some folders and some files, open the file named chatbotExample.php

If you imported successfully Zaroc and ordered as shown before, you should see that this Chatbot is requiring Zaroc, if you changed the routers/folders hierarchy, remember to change the path.

```php
require_once("../zaroc/zaroc.php");
```

## 3.- Connecting Chatbot with Dialogflow

Once you imported successfully, right now your ChatbotExample knows how to handle Dialogflow, so we are going to Connect our ChatbotExample Backend with Dialogflow.

> - Go to Dialogflow, and in the option **Fulfillment**
> - Enable Webhook
> - In the URL path you should put the Chatbot core file, this should be https://rootDomain.com/chatbots/chatbotExample/chatbot.php
>
> - We are going to use basicAuth so we need a Key and Password Values, move to your ChatbotExample Folder
> - Inside of the **core folder** you should see a file named **variables.php** Open It!
> - At the top there are two variables named chatbotName and chatbotPassword, these values are the key and the password
> - So you can type in the basic Auth, then press the Blue Save button at the bottom of the Page.

## 4.- Testing Zaroc on Current Chatbot

Right now Zaroc is connected to our Chatbot that is connected to Dialogflow, we just need Test the connection and we'll be done

##### Dialogflow Section

> - Create a Intent named test
> - On Training phrases put **'test'**
> - On Responses let's create a default response of **'Test 💥'**
> - Then go down and open the section of Fulfillment and click on **Enable Webhook Call for this Intent**

##### Server Section

> - Go to your Chatbot Template folder and open the Intents Folder
> - Right here we should have all the Intents ordered by Category and other stuff that you can check on Documentation 😉
> - Open the file named test.php, you should be able to see some code like this.

```php
<?php
if(intent('test')){
  triggerError('test','Message from the Backend');
}
?>
```

###### Testing on Dialogflow

In order to test we should go right now to Dialogflow and type on the console the word **'test'**

If we got the response of **'Message from the backend'** Congratulations.

If not you can:

> - Look at the Video
> - Repeats the Steps
> - Check the Webhook Error Sections

## What's next?

- > Check the Tutorials, they let you know what to Check!
