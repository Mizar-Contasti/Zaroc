---
sidebar_position: 1
---

# Custom Functions (CUSTOM)

### Date

### Text

#### id

> - Returns a little Random ID

```php
$id = id();
```

#### id2

> - Returns a stronger Random ID

```php
$id = id2();
```

#### createSpan

> - Help us to create a Span, this span works adding Styles to text on webBlocks

```php
$text = Array("Titleeee");
$properties = Array("style='color:red';");

$span = createSpan($text,$properties);
```

#### endsWith

> - Checks if a String ends with an specific LEtter

```php
$result =  endsWith($haystack, $needle);
```

#### startsWith

> - Checks if a String starts with specific string

```php
$string = "hello world";
$startString = "he";

$result = startsWith ($string, $startString);
```

#### reduce

> - Removes blank spaces

```php
$text = "Hey There how are you   ";

$newText = reduce($text);
```

#### lower

> - Changes to lowerCase

```php
$text = "HEy THERE";

$newText = lower($text);
```

#### reduceLower

> - Chantes to lowerCase and removes blank spaces

```php
$text = "HEy THERE";

$newText = reduceLower($text);
```

#### titleAdjust

> - Removes blank spaces and changes to uppercase

```php
$text = "HEy THERE";

$title = titleAdjust($text);
```

#### whatsAppLink

> - Creates a WhatsAppLink with a Prefered Opening Text

```php
$phone = Array("XXXXXX");
$text = Array("Hey there, welcome to my whatsapp chat");

$wsLink = whatsAppLink($text,$phone)
```

#### textToUrlEncode

> - Changes the Text to a Url Format

```php
$text = Array("Text ready to be encoded");

$nexText = textToUrlEncode($text);
```

### Mail

#### prepareEmail

> - Help us to prepare a Email (Change its variables and more).

```php
$variables = Array(
    'variable1' => 'value1',
    'variable2' => 'value2'
);

$emailFileUrl = Array("./../email/testEmail.html");

$email = prepareEmail($variables, $emailFileUrl);
```

### Api

#### getJSONVariable

> - Help us to retrieve information from a JSON

```php
$variableName = Array("color");
$jsonBody;

$variable = getJsonVariable($jsonBody, $variableName);
```

#### adaptJSON

> - Adapts Json.Stringify format to a readable format to PHP

```php
$jsonBody = '" { "format" : "nice" } "';

$newJSON = adaptJson($jsonBody);
```

#### openWeatherAPI

> - Help us consume openWeatherAPI

```php
$apiKey = Array("XXXXXXXXXXXXXXXXXXXXXXXX");
$country = Array("-MX");
$location = Array("Mexico City");

$url = openWeatherAPI($apiKey,$country,$location);
```

#### internationalNewsAPI

> - Help us consume internationalNewsAPI

```php
$apiKey = Array("XXXXXXXXXXXXXXXXXXXXXXXX");
$category = Array("Health");
$country = Array("-MX");
$page = Array("1");

$url = internationalNewsApi($apiKey,$category,$country,$page);
```
