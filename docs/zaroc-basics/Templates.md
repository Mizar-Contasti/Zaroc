---
sidebar_position: 3
---

# Templates

Templates are used to show amazing UI/UX components build with strong blocks and patterns.

Please check first Blocks and let's go.

Zaroc by itself has many templates, divided in some categories.

```shell
Zaroc
└─── templates
    │   webTemplates
    │   fbTemplates
    │   wsTemplates
    │   tgTemplates
    │   templates
```

## webTemplates

WebTemplates are used to build nice structures in a Web Environment. These templates are created to work with Dialogflow Messenger.

### webStructureTemplate

**webStructureTemplate help us to create a custom Structure**

> - You can use whatever block you want but take in mind that you have to separate it with a separator (Choose what best fits to you).
> - In order to make structure work, you can paste all the name's structures inside of structure, and the components required in the component array
> - If you dont know already what to do with context please make it false and just declare contextBody as nothing. (You can find Context in doc)

```php
$context = false;
$contextBody;
$webTitle = Array("intentName");

$structure = Array('image','comma','accordeon','superDivider','button');
$components = Array(
    Array($imageArray,$webTitle),
    Array(),
    Array($imageArray,$titleArray,$aSubtitleArray,$aTextArray),
    Array(),
    Array($bTitleArray,$bCustomArray,$bIconArray,$bColorArray)
);

webStructureTemplate($context, $contextBody, $webTitle, $structure, $components);
```

### webDescriptionTemplate

**Description template for web**

> - If you dont know already what to do with context please make it false and just declare contextBody as nothing. (You can find Context in doc)

```php
$context = false;
$contextBody;
$webTitle = Array("intentName");

$dTitleArray = Array("Description Title 1");
$dTextArray = Array("Description text 1");

webDescriptionTemplate($context,$contextBody,$webTitle,$dTitleArray,$dTextArray);
```

### webParagraphTemplate

**Paragraph template for web**

> - If you dont know already what to do with context please make it false and just declare contextBody as nothing. (You can find Context in doc)

```php
$context = false;
$contextBody;
$webTitle = Array("intentName");

$pTitleArray = Array("Title1");
$pSubtitleArray = Array("Subtitle1");

webParagraphTemplate($context,$contextBody,$webTitle,$pTitleArray,$pSubtitleArray);
```

### webChipsTemplate

**Chip template for web**

> - If you dont know already what to do with context please make it false and just declare contextBody as nothing. (You can find Context in doc)

```php
$context = false;
$contextBody;
$webTitle = Array("intentName");

$cTitleArray = Array("Chip 1 Title","Chip 2 Title");
$cImageArray = Array("https://chip1urlimage.com","https://chip2urlimage.com");
$cCustomArray = Array("chip1Custom","https://chipurl.com");

webChipsTemplate($context,$contextBody,$webTitle,$cTitleArray,$cImageArray,$cCustomArray);
```

### webAccordeonTemplate

**Accordeon template for web**

> - If you dont know already what to do with context please make it false and just declare contextBody as nothing. (You can find Context in doc)

```php
$context = false;
$contextBody;
$webTitle = Array("intentName");

$aImageArray = Array("https://chip1urlimage.com");
$aTitleArray = Array("Title");
$aSubtitleArray = Array("Subtitle");
$aTextArray = Array("Text");

webAccordeonTemplate($context,$contextBody,$webTitle,$aImageArray,$aTitleArray,$aSubtitleArray,$aTextArray);
```

### webButtonTemplate

**Button template for web**

> - If you dont know already what to do with context please make it false and just declare contextBody as nothing. (You can find Context in doc)

```php
$context = false;
$contextBody;
$webTitle = Array("intentName");

$bTitleArray = Array("Button 1 Title","Button 2 Title");
$bCustomArray = Array("Button 1 Custom","https://buttonurl.com");
$bIconArray = Array("button1Icon","home");
$bColorArray = Array("$red","#fff");

webButtonTemplate($context,$contextBody,$webTitle,$bTitleArray,$bCustomArray,$bIconArray,$bColorArray);
```

### webImageTemplate

**Image template for web**

> - If you dont know already what to do with context please make it false and just declare contextBody as nothing. (You can find Context in doc)

```php
$context = false;
$contextBody;
$webTitle = Array("intentName");

$iImageArray = Array("https://imageurl.com");


webImageTemplate($context,$contextBody,$webTitle,$iImageArray);
```

### webListTemplate

**List template for web**

> - If you dont know already what to do with context please make it false and just declare contextBody as nothing. (You can find Context in doc)

```php
$context = false;
$contextBody;
$webTitle = Array("intentName");

$lTitleArray = Array("List Title Array","List Title Array");
$lSubtitleArray = Array("List Subtitle Array","List Subtitle Array");
$lImageArray = Array("https://listimageurl.com","https://listimageurl.com");
$lCustomArray = Array("listEvent","https://google.com");

webListTemplate($context,$contextBody,$webTitle,$lTitleArray,$lSubtitleArray,$lImageArray,$lCustomArray);
```

### webImageAccordeonButtonTemplate

**Card template for web**

> - If you dont know already what to do with context please make it false and just declare contextBody as nothing. (You can find Context in doc)

```php
$context = false;
$contextBody;
$webTitle = Array("intentName");

$aImageArray = Array("https://chip1urlimage.com");
$aTitleArray = Array("Title");
$aSubtitleArray = Array("Subtitle");
$aTextArray = Array("Text");

$bTitleArray = Array("Button 1 Title","Button 2 Title");
$bCustomArray = Array("Button 1 Custom","https://buttonurl.com");
$bIconArray = Array("button1Icon","home");
$bColorArray = Array("$red","#fff");

webImageAccordeonButtonTemplate($context,$contextBody,$webTitle,$aImageArray,$aTitleArray,$aSubtitleArray,$aTextArray,$bTitleArray,$bCustomArray,$bIconArray,$bColorArray);
```

## fbTemplates

fbTemplates are used to build nice structures in a Facebook Messenger Environment. These templates are created to work with Facebook Messenger.

### fbStructureTemplate

**fbStructureTemplate help us to create a custom Structure**

> - You can use whatever block you want but take in mind that you have to separate it with a separator (Choose what best fits to you).
> - In order to make structure work, you can paste all the name's structures inside of structure, and the components required in the component array
> - If you dont know already what to do with context please make it false and just declare contextBody as nothing. (You can find Context in doc)
> - External or Generic Blocks should be used inside of open/close Payloads

```php

$context = false;
$contextBody;

$fbTitleArray = Array("card1 intentName","card2 intentName");
$fbImageArray = Array("https://imageCardurl1.com","https://imageCardurl2.com");
$fbSubtitleArray = Array("subtitle for card1","subtitle for card2");
$fbLinkArray = Array("https://cardHyperlink.com","https://cardHyperlink.com");
$fbStyleArray = Array("$Style_Tall","$Style_Full");
$bTitleArray = Array(
  Array("Card1 Button1 Title","Card1 Button 2 Tittle"),
  Array("Card2 Button1 Title","Card2 Button 2 Tittle")
);
$bCustomArray = Array(
  Array("Card1 Button 1 postback","https://Card1button2url.com"),
  Array("Card2 Button 1 postback","https://Card2button2url.com")
);

$structure = Array('openPayload','generic','closePayload');
$components = Array(
    Array(),
    Array($fbTitleArray,  $fbImageArray,  $fbSubtitleArray,  $fbLinkArray,  $fbStyleArray   , $bTitleArray, $bCustomArray),
    Array()
);

fbStructureTemplate($context,$contextBody,$fbTitle,$structure,$elements);
```

## wsTemplates (BETA)

wsTemplates are used to build nice structures in a WhatsApp Environment. These templates are created to work with WhatsApp.

### wsParagraphTemplate

**wsParagraphTemplate help us to create a custom Structure**

> - You can use whatever block you want but take in mind that you have to separate it with a separator (Choose what best fits to you).
> - In order to make structure work, you can paste all the name's structures inside of structure, and the components required in the component array
> - If you dont know already what to do with context please make it false and just declare contextBody as nothing. (You can find Context in doc)
> - wsBlocks just works with Text

```php
$context = false;
$contextBody;

$wsTitle = Array();
$wsTextArray =  Array();

wsParagraphTemplate($context, $contextBody, $wsTitle, $wsTextArray);
```

## tgTemplates (BETA)

tgTemplates are used to build nice structures in a Telegram Environment. These templates are created to work with Telegram.

### tgStructureTemplate
