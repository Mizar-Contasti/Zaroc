---
sidebar_position: 1
---

# Variables

Lot of Variables are used in Zaroc's Ecosystem, most of them works to facilitate some work with Zaroc.

So in order to cover most of the Variables used in Zaroc lets make a quick list

#### Variables

> - Zaroc Variables
> - Chatbot Variables
> - Custom Variables

## Zaroc Variables

These variables are declared inside of the core of Zaroc. Most of them are used to make Zaroc work properly, enhance some default responses.

Variables can be found in these order

```shell
Zaroc
└─── variables
    │   colors
    │   dates
    │   links
    │   miscelaneous
    │   variables
```

#### Colors

Most of the Libraries that work with Chatbots need color codes in Hex, this library provides lot of colors.

```php
$blue = "#452EC1";
```

#### Dates

These Variables are currently on testing, helps for Date and Time.

```php
$actualDate = date('d-m-Y');
```

#### Links

These variables are links for example and testing, let say that you want to redirect to a page. Currently on Testing

```php
$exampleLink = "https://example.com";
```

#### Miscelaneous

These variales are used in some special times, most of them contain styles, specific typos. Currently on testing.

#### Variables

This file just takes care of requiring all the Variables.

## Chatbot Variables

```shell
Zaroc
└─── core
    │   variables
```

These variables inside of the Chatbot makes an Easy Setup. Most of the time try to fill these variables with the required information.

## Custom Variables

These variables are variables that you can create by yourself in order to help you when building your chatbot.

By the time create your own variables at the bottom of the Chatbot Variables file.

**Remember that you can re-value a variable just in case you needed**.
