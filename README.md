# Batch Rename Items in Illustrator

JSX Script to batch rename selected items in an Illustrator document.

## How to install

Download the JSX file and put the file in:
`Applications/Adobe Illustrator [VERSION]/Presets/[LANG]/Scripts/`

If Illustrator is opened close it after saving your work, and relaunch the application.

## How to use it

This script is made to rename Items and not layers (first level object).
To use it, select the Items you want to rename, and reach the menu __File > Scripts > Rename Items__

### I want to batch rename

1. At the first prompt, empty the field and press __Enter__.
2. At the second one, fill the field with the name you want. If you want an auto-incremented name, use the `%i` placeholder where you want in the name. E.i.: `my-name-%i` will give you items named `my-name-1`, `my-name-2`, `my-name-3` etc.
3. (Optional) If you used `%i`, a third prompt will appear letting you chose at which number the counting should start.

### I want to search and replace

Same as previous, but at step 1, enter the part of the name you want to replace. For example, if you enter `li`, it will replace all the `li` occurrences in the selected items name by the word choosen in step 2, for example `blo`.
`link` will become `blonk`
`tranquility` will become `tranquibloty`
etc.

## Bug known

When the renaming is done, the item names are not refreshed. You will need to close/open the parent layer to make the renaming appears.

## Authors/Contributors

- Author:
  - Geoffrey Crofte: [Twitter](https://twitter.com/geoffrey_crofte)
- From an original script:
  - Sébastien Lavoie: [Github](https://github.com/seblavoie/)