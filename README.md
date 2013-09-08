ng-genie
========

Directive for [GenieJS](http://www.github.com/kentcdodds/genie)

[Demo](http://kentcdodds.github.com/ng-genie)

Vernacular
--
See the original genie [vernacular documentation](https://github.com/kentcdodds/genie#vernacular). Words specific to this directive:

 - Lamp: The home of Genie. In Arabian folklore, the genie is imprisoned in a lamp until summoned by rubbing the lamp to perform wishes. In a GenieJS context, this is the interface between GenieJS and the user.

Setup
--
The directive is called `ngLamp` in a module called `ngGenie`. It is restricted to attributes ([Angular default](http://docs.angularjs.org/guide/directive)). Here is an example of it's use:

### Load Script

```html
<script src="./vendor/genie.js"></script> <!-- ngGenie depends on the global genie variable -->
<script src="./vendor/ngGenie.js"></script>
```

### Add Dependency

```javascript
angular.module('yourApp', ['ngGenie']);
```

### Use Directive

**Short Version**

```html
<div ng-lamp></div>
```

This will provide you will the default lamp functionality. The lamp is rubbed with <kbd>Ctrl</kbd> + <kbd>Space</kbd> and it will simply appear/disappear.

**Long Version**

```html
<div ng-lamp visible-class="visible" rub-shortcut="32" rub-modifier="ctrlKey" rub-event-type="keypress"></div>
```

The attributes of interest:

 - `ng-lamp` - The directive itself.
 - `visible-class` - The class to give the lamp when it should be visible. Useful for CSS transitions. If excluded, the lamp will simply appear/disappear when rubbed.
 - `rub-shortcut` - The character code or character to bind as a shortcut to rub the lamp. Defaults to 32 (<kbd>space</kbd> keyCode).
 - `rub-modifier` - A modifier key to be pressed to rub the lamp (ie `ctrlKey`, `metaKey`, `shiftKey`, `altKey`). Defaults to `ctrlKey`.
 - `rub-event-type` - The type of event to bind the lamp rubbing shortcut to.

Contributing
--
I'd love to accept [pull requests](https://github.com/kentcdodds/ng-genie/pulls).

Issues
--
If you have a problem with GenieJS please don't hesitate to use GitHub's [issue tracker](https://github.com/kentcdodds/ng-genie/issues)
to report it. I'll do my best to get it resolved as quickly as I can.

The Future...
--
... [is as bright as your faith](https://www.lds.org/general-conference/2009/04/be-of-good-cheer?lang=eng).
*And* I plan on adding the following features in the future

 - Make tests... :)
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