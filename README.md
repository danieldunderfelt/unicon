# Unicon
A CSS library for applying Unicode icons easily. This library is an alternative to other "designed" logo packs or icon fonts. Unicode contains many truly useful icons, and often they are very usable in web design. This library is an easy-to-use interface to the treasure trove that is Unicode.

Advantages;

- No font file. Many fonts already contain these glyphs!
- Very small file size.
- Display in virtually all devices.
- Easily add your own.
- Versatile; Use with a Sass mixin, normal classes or data attributes.

## Installation

Install with Bower:

```
bower install unicon
```

or npm:

```
npm install unicon
```

## Usage

You can use Unicon with a mixin, normal CSS classes or attributes.

### Mixin
To use the mixin, `@import` the `unicon.scss` file into your project. The `unicon` mixin will then be available snd can be used like so:

```
@include unicon(arrow-forward, after) {
    /* additional styles for the pseudo element */
}
```

The first argument is the name of the icon as specified in `_icons.scss`. The second argument is the pseudo element you want the icon to display in. It is optional, and the default is `after`. If you write more styles into the body of the mixin block, those will be added to the pseudo element.

### Classes

Classes and attributes can be used in projects that do not use Sass. Simply add `unicon-[icon name]` to any element to display an icon. The default pseudo-element is, as with the mixin, `after`. To use the `before` pseudo-element, append `-before` to the class name.

Example:

```
<div class="unicon-sun">I have an icon!</div>
<div class="unicon-sun-before">I have an icon in the before pseudo-element!</div>
```

### Attributes

Unicon includes selectors for two attributes: `data-unicon-before` and `data-unicon-after`. Enter the icon name as the value for one of those data attributes to display an icon using the `before` or `after` pseudo-element respectively.

Example:

```
<span data-unicon-before="airplane">Airplane</span>
<span data-unicon-after="airplane">Airplane</span>
```

## Customisation

There are a few style rules added to the pseudo element: padding and display. The icon uses `display: inline` and `padding-left: .4em` (or `padding-right`, depending on the pseudo element) by default. You can overwrite these with the variables `$icon-display` and `$icon-padding` respectively.

You can also set the font the icons use globally. Overwrite the `$icon-font` variable to accomplish this. By default Unicon uses Georgia, as it displays all icons nicely. Many fonts do include all glyphs, but they might display them differently. You'll have the best luck with system fonts.

## Extension

You can also extend Unicon's icon list easily, no need to submit a pull request or fork the library! Simply use Sass' `map-merge` function to add icons to the list.
You need a name for the icon which you are free to come up with yourself, as well as the CSS-specific Unicode identifier. You can find this using [Graphemica](http://graphemica.com/). Navigate to the page of a glyph, scroll down, and you'll find an entry for the CSS identifier. Alternatively, take the last four characters of the Unicode code point for a glyph (for example, from `U+02FF` you'd take `02FF`) and append them to `\00`.

Remember to assign the result of the `map-merge` call to the `$unicon-icons` variable. Like so:

```
$unicon-icons: map-merge($unicon-icons, (
    'small-arrow-left': '\0002FF'
));
```

Please keep in mind that if you use a name that already exists, the existing icon will be overwritten by your new one.

## Contributing

Pull requests welcome! In lieu of a formal style guide, please try to mimic the existing code style as close as possible.

If you want to add an icon, please follow the naming guidelines:
`[style]-[style-modifier]-[object-type]-[direction]`

Only the object-type is mandatory, as that describes the icon.

Style mostly describes if the glyph is filled or is an outline. If it's filled, or if the distinction is not important, omit the `[style]` part.

`[style-modifier]` further describes how the icon looks. For example, `wavy`, `thin` or `double` would constitute the `style-modifier` part of the icon name.

`[object-type]` is the identifier for the icon itself. It might be `arrow`, `triangle`, `sun` or `cross`. This is the only mandatory part of the name. You may hyphenize the object-type if necessary.

Lastly, there's the `[direction]` segment. This is only really applicable to arrows and describes where the arrow is pointing.

Please only submit a pull request with generally useful Unicode icons. If you need to use an icon through the Unicode logic, please extend the `$unicode-icons` map.

I will probably reject the following:

- Emoji. This library is not for emoji. Yes, I know they're unicode.
- Letters. Even unusual letters are probably not needed for this library.
- That also goes for pictograms, hanzi, kanji or other non-western glyphs. Except where they can be used as an icon.

Just keep in mind that the mission of this library is to provide the same services as a normal "designed" logo pack or library for web design. It is not to be able to display all Unicode characters.