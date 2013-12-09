ux-genie
========

Directive for [GenieJS](http://www.github.com/kentcdodds/genie)

[Demo](http://kentcdodds.github.com/genie)

Vernacular
--
See the original genie [vernacular documentation](https://github.com/kentcdodds/genie#vernacular). Words specific to this directive:

 - Lamp: The home of Genie. In Arabian folklore, the genie is imprisoned in a lamp until summoned by rubbiux the lamp to perform wishes. In a GenieJS context, this is the interface between GenieJS and the user.
 - UX: The `ux-` prefix stands for "User eXperience." This was used in an effort to follow the [Best Practices](https://github.com/angular/angular.js/wiki/Best-Practices) proposed by the AngularJS Team.

Setup
--
The directive is called `uxLamp` in a module called `uxGenie`. It is restricted to attributes ([Angular default](http://docs.angularjs.org/guide/directive)). Here is an example of it's use:

### Load Script

```html
<script src="./vendor/genie.js"></script> <!-- uxGenie depends on the global genie variable -->
<script src="./vendor/uxGenie.js"></script>
```

### Add Dependency

```javascript
angular.module('yourApp', ['uxGenie']);
```

### Use Directive

**Short Version**

```html
<div ux-lamp></div>
```

This will provide you will the default lamp functionality. The lamp is rubbed with <kbd>Ctrl</kbd> + <kbd>Space</kbd> and it will simply appear/disappear.

**Long Version**

```html
<div 
  ux-lamp
  visible-class="visible"
  rub-shortcut="32"
  rub-modifier="ctrlKey"
  rub-event-type="keypress"
  wish-callback="wishMade()"
  local-storage="true">
</div>
```

The attributes of interest:

 - `ux-lamp` - The directive itself.
 - `visible-class` - The class to give the lamp when it should be visible. Useful for CSS transitions. If excluded, the lamp will simply appear/disappear when rubbed.
 - `rub-shortcut` - The character code or character to bind as a shortcut to rub the lamp. Defaults to 32 (<kbd>space</kbd> keyCode).
 - `rub-modifier` - A modifier key to be pressed to rub the lamp (ie `ctrlKey`, `metaKey`, `shiftKey`, `altKey`). Defaults to `ctrlKey`.
 - `rub-event-type` - The type of event to bind the lamp rubbing shortcut to (like `keypress`, `keyup`, or `keydown`).
 - `wish-callback` - A function to call when a wish is made (i.e. the user clicks or presses <kbd>enter</kbd> on a wish). The wish which was made is passed to this as an argument.
 - `local-storage` - Defaults to false, but if it is set to true (or a truthy variable) then the user's preferences will be saved to their local storage and reloaded whenever they refresh the browser.

Other Stuff
--

### View All Wishes
If the first character typed in the lamp input field is <kbd>'</kbd> (apostrophe), then it is stripped from the input when genie is queried for matching magic words. This is primarily to enable a user to see all the available wishes.

### CSS
If all you do is follow the instructions above you'll be disappointed to see that the lamp looks nothing like the demo. This is because I've opened it up to you to do custom CSS. You can borrow from the css I've made in the demo, or you can be creative and use the classes available to you:

```css
.genie-container {/* */}

.genie-container > input {/* */}

.genie-wishes {/* */}

.genie-wish {/* */}

.genie-wish.focused {/* */}
```

Contributing
--
I'd love to accept [pull requests](https://github.com/kentcdodds/ux-genie/pulls).
When you clone the repo, make sure to run `bower install` to get the dependencies.
Also, please uglify `uxGenie.js` to `uxGenie.min.js` using [UglifyJS2](https://github.com/mishoo/UglifyJS2)
and this command: `uglifyjs uxGenie.js -o uxGenie.min.js --comments` thanks!

Issues
--
If you have a problem with GenieJS please don't hesitate to use GitHub's [issue tracker](https://github.com/kentcdodds/ux-genie/issues)
to report it. I'll do my best to get it resolved as quickly as I can.

The Future...
--
... [is as bright as your faith](https://www.lds.org/general-conference/2009/04/be-of-good-cheer?lang=eng).
*And* I plan on adding the following features in the future

 - Make tests... :)
 - Allow custom template for wishes
 - Make a jQuery plugin version of this...? I'd love to see someone else make this if you like :)

License
--
The MIT License (MIT)

Copyright (c) 2013 Kent C. Dodds

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/kentcdodds/ux-genie/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

