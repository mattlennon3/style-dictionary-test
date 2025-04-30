# style-dictionary-test

This repo has been created to share our setup for importing JSON files from the Tokens Studio Figma plugin.

This is currently not working, but will hopefully be a good enough example of the setup we have, to help debug and fix it.

## Setup & Running

This project was made with a simple `npm` setup.

`npm i`, `npm run parse`

After that, the below errors should appear:

```
theme1.badge.generic.value tries to reference color.fill.surface.action.action secondary, which is not defined.
theme1.badge.default.value tries to reference color.fill.surface.feedback.success primary, which is not defined.
theme2.badge.generic.value tries to reference color.fill.surface.action.action secondary, which is not defined.
theme2.badge.default.value tries to reference color.fill.surface.feedback.success primary, which is not defined.
semantics.color.fill.surface.feedback.success primary.value tries to reference color.success.500, which is not defined.
semantics.color.fill.surface.action.action secondary.value tries to reference color.transparancy.00%, which is not defined.
```
