---
sidebar_position: 2
---

# Blocks

In order to build responses we need to create an Specific JSON structure, Zaroc has take care of this process in detail so thats why built structures.

These structures or Templates are build with Blocks, right now we are just going to give you a look about the blocks and what these look like.

Zaroc by itself has many blocks, divided in some categories.

```shell
Zaroc
└─── blocks
    │   coreBlocks
    │   webBlocks
    │   wsBlocks
    │   fbBlocks
    │   tgBlocks
    │   blocks
```

Blocks by itself are not helpfull, you should use a template instead to create complex or desired structures, so you will need first take a look at the blocks and then take care of a template examples.

## Core Blocks

Core blocks are used for all Templates, these blocks represent specific little structures like (commas, bracket commas, parenthesis commas), open/close structures and more.

### Open/Close Blocks

These blocks are used to open and close structures.

##### dfOpen/Close are the first and last part of our entire template.

```php
function dfOpen(){
  echo('{');
}
function dfClose(){
  echo('}' . PHP_EOL);
}
```

##### structureOpen/Close are the blocks that take care of the structure view or data that should be parsed as a Visual Component

```php
function structureOpen(array $title){
  echo ('"fulfillmentText":"'.$title[0].'","fulfillmentMessages": [');
}
function structureClose(){
  echo(']');
}
```

##### contextOpen/Close are the blocks that take care of the context or data available behind scenes

```php
function contextOpen(){
  echo('"outputContexts":[');
}
function contextClose(){
  echo(']');
}
```

##### open/closePayload are used when you want to create a response that comes inside of a payload

```php
function openPayload(){
  echo ('{"payload":');
}
function closePayload(){
  echo ('}');
}
```

###### open/closeWeb are used for DialogflowMessenger

```php
function openWeb(){
echo('{"richContent": [[');
}
function closeWeb(){
  echo(']]}');
}
```

### Separators

Separators are used to separate blocks. There are multiple ways to separate, depending of the integrations one or more are allowed.

##### Comma is the general separator used for all structures

```php
function comma(){
  echo (',');
}
```

##### Basic Divider is only available for Dialogflow Messenger

```php
function basicDivider(){
  echo ('{"type": "divider"}');
}
```

##### Comma Divider is only available for Dialogflow Messenger

```php
function commaDivider(){
  echo (',{"type": "divider"},');
}
```

##### Super Divider is only available for Dialogflow Messenger

```php
function superDivider(){
  echo ('],[');
}
```

## webBlocks

WebBlocks are used to build structures with **Dialogflow Messenger**

### webParagraph is used to show a Paragraph.

WebParagraph can contain styles with the Span Function. To see more information check the doc.

```php
function webParagraph(array $pTitleArray, array $pSubtitleArray)
{
   echo
      ('{
      "type": "accordion",
      "title": "' . $pTitleArray[0] . '",
      "subtitle": "' . $pSubtitleArray[0] . '",
      "text": "",
      "image": {
        "src": {
          "rawUrl": ""
        }
      }
    }');
}
```

### webAccordeon is used to display a card

> - webAccordeon shows a Card with Title, Subtitle and a text inside of a accordeon label.
> - Accordeon Text can have styles with the span function.

```php
function webAccordeon( array $aImageArray, array $aTitleArray, array $aSubtitleArray, array $aTextArray)
{
   echo
      ('{
      "type": "accordion",
      "title": "' . $aTitleArray[0] . '",
      "subtitle": "' . $aSubtitleArray[0] . '",
      "text": "' . $aTextArray[0] . '",
      "image": {
        "src": {
          "rawUrl": "' . $aImageArray[0] . '"
        }
      }
    }');
}
```

### webButton is used to display a Button

> - Button works in two ways depending if you pass a link (you will get a redirection with target blank) if just text, a Event with this text as name will be triggered.
> - Buttons can be used with a Card
> - Buttons can be stacked indifinetely and you can separate with basicDivider.

```php
function webButton( array $bTitleArray, array $bCustomArray, array $bIconArray, array $bColorArray)
{
    $raw = '';
    for ($i = 0;$i < count($bTitleArray);$i++):
        if (filter_var($bCustomArray[$i], FILTER_VALIDATE_URL) === false )
        {
            $raw .= '{
                    "type": "button",
                    "text": "' . $bTitleArray[$i] . '",
                    "link": "",
                    "style" : {
                        "background-color": "' . $bColorArray[$i] . '"
                    },
                    "icon": {
                    "type": "' . $bIconArray[$i] . '",
                    "color": "' . $bColorArray[$i] . '"
                    },
                    "event": {
                    "name": "' . $bCustomArray[$i] . '",
                    "languageCode": "es",
                    "parameters": {}
                    }
                },';
        }
        else
        {
            $raw .= '{
                    "type": "button",
                    "text": "' . $bTitleArray[$i] . '",
                    "link": "' . $bCustomArray[$i] . '",
                    "icon": {
                        "type": "' . $bIconArray[$i] . '",
                        "color": "' . $bColorArray[$i] . '"
                    },
                    "event": {
                        "name": "",
                        "languageCode": "es",
                        "parameters": {}
                    }
                },';
        }
    endfor;
    $result = rtrim($raw, ",");
    echo $result;
    }
```

### webChip displays one title and multiple options to choose

> - Webchips can work on two different ways depending if you put a link (Will work as an a Hyperlink) if you put a word, this will be the default message outputted if the user press on it.
> - WebChips stacks indefinitely and are separed in a Flexbox way.

```php
function webChips( array $cTitleArray, array $cImageArray, array $cCustomArray){
    $raw1 = ' {
        "type": "chips",
        "options": [';

        $raw2 = '';

        for($i = 0; $i < count($cTitleArray); $i++):

        if(filter_var($cCustomArray[$i], FILTER_VALIDATE_URL) == false ){
            $raw2 .='{
                "text": "'.$cTitleArray[$i].'",
                "image": {
                  "src": {
                    "rawUrl": "'.$cImageArray[$i].'"
                  }
                },
                "link": ""
              },';
        } else {
            $raw2 .='{
                "text": "'.$cTitleArray[$i].'",
                "image": {
                  "src": {
                    "rawUrl": "'.$cImageArray[$i].'"
                  }
                },
                "link": "'.$cCustomArray[$i].'"
              },';
        }
            endfor;
            $raw2 = rtrim($raw2, ",");
        $raw3 = ']}';
        $result = $raw1.' '.$raw2.' '.$raw3;
        echo $result;
}
```

### webImage displays a simple image

> - Images can be stacked indifinelty, but only one can be used for an Accordeon

```php
function webImage( array $iImageArray, array $iTextArray)
{
    $raw = '';
    for ($i = 0;$i < count($iImageArray);$i++):

        $raw .=
        '{
            "type": "image",
            "accessibilityText": "' . $iTextArray[$i] . '",
            "rawUrl": "' . $iImageArray[$i] . '"
        },';
    endfor;
    $result = rtrim($raw, ",");
    echo $result;
}
```

### webList displays horizontal Cards

> - Lists can work as Buttons, if you put a link in their customPart these will work as hyperlink, if just a text, will trigger an Event with that name.

```php
function webList( array $lTitleArray, array $lSubtitleArray, array $lImageArray, array $lCustomArray){

    $raw = '';

    for($i = 0; $i <count($lTitleArray); $i ++):

        if (filter_var($lCustomArray[$i], FILTER_VALIDATE_URL) === false ){

          $raw .= '{
              "type": "list",
              "title": "' . $lTitleArray[$i] . '",
              "subtitle": "' . $lSubtitleArray[$i] . '",
              "image": {
                  "src": {
                    "rawUrl": "' . $lImageArray[$i] . '"
                  }
                },
              "event": {
                "name": "' . $lCustomArray[$i] . '",
                "languageCode": "es",
                "parameters": {}
              }
            },';
        } else {
          $raw .='{
                  "type": "info",
                  "title": "'.$lTitleArray[$i].'",
                  "subtitle": "'.$lSubtitleArray[$i].'",
                  "actionLink": "'.$lCustomArray[$i].'",
                  "image": {
                    "src": {
                      "rawUrl": "'.$lImageArray[$i].'"
                    }
                  }
                },';
              }

  endfor;
  $result = rtrim($raw, ",");
  echo $result;
}
```

### webDescription

> - A Simple text with lot of Paragraphs
> - Depending of how many text you pass as index you will get separated paragraphs.

```php
function webDescription(array $dTitleArray, array $dTextArray){

    $raw1 = '';
    $raw2 = '';

    for($i1 = 0; $i1<count($dTitleArray); $i1 ++):

        $raw1 .= '  {
          "type": "description",
          "title": "'.$dTitleArray[$i1].'",
          "text": [';
        for($i2 = 0; $i2 < count($dTextArray[$i1]); $i2++):
            $raw2 .=  ' "' . $dTextArray[$i1][$i2] . '",';
        endfor;
        $raw1 .= rtrim($raw2, ",");
        $raw2 = '';
        $raw1 .= ']
                },';
        endfor;

        $result = rtrim($raw1, ",");
        echo $result;
    }
```
