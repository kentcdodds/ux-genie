#0.2.4

 - `genie-wish` - made it so you can escape commas for magic words like so: "People\, places\, and things".
 - `ux-lamp` - added subContext capabilities (see README).
 - `ux-lamp` - added simple calculator.
 - `ux-lamp` - fixed a couple of bugs...

#0.2.3

 - `ux-lamp` bug fix. Not including the `lamp-visible`, `wish-callback`,
 or `local-storage` caused angular to crash with [this error](http://docs.angularjs.org/error/$compile:nonassign?p0=undefined&p1=uxLamp)

#0.2.2

 - `genie-wish` directive will now look at the content of the element
 for the wish's magic word if there is no value for the `genie-wish`,
 `name`, or `id` attributes.
 - `genie-wish` now has a new attribute called `ignore-wish` which
 the directive observes for changes. If it is set to true during the
 link phase, the wish will not be registered until the attribute is
 changed to "true".
 - This change log :)