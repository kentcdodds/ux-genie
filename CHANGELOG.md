#0.2.2

 - `genie-wish` directive will now look at the content of the element
 for the wish's magic word if there is no value for the `genie-wish`,
 `name`, or `id` attributes.
 - `genie-wish` now has a new attribute called `ignore-wish` which
 the directive observes for changes. If it is set to true during the
 link phase, the wish will not be registered until the attribute is
 changed to "true".
 - This change log :)