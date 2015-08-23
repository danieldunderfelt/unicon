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
    'small-arrow-left': &#x02FF;
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

## Roadmap

- Add adjustments to some icons.
- Add a separate `composites` list, which contains combined or otherwise not-off-the-unicode-shelf icons.
- More icons!

## List of included icons

Please refer to the index.html file in the repository for a better preview of the icons.

### Arrows

- `u-arrow-left`: &#x21A9;,
- `u-arrow-right`: &#x21AA;,

- `circular-arrow-anticlockwise`: &#x21BA;,
- `circular-arrow-clockwise`: &#x21BB;,
- `closed-circular-arrow-anticlockwise`: &#x27F2;,
- `closed-circular-arrow-clockwise`: &#x27F3;,

- `angle-arrow-left`: &#x21B0;,
- `angle-arrow-right`: &#x21B1;,

- `double-arrow-left`: &#x21D0;,
- `double-arrow-up`: &#x21D1;,
- `double-arrow-right`: &#x21D2;,
- `double-arrow-down`: &#x21D3;,
- `double-arrow-left-right`: &#x21D4;,
- `double-arrow-up-down`: &#x21D5;,
- `double-arrow-top-left`: &#x21D6;,
- `double-arrow-top-right`: &#x21D7;,
- `double-arrow-bottom-right`: &#x21D8;,
- `double-arrow-bottom-left`: &#x21D9;,

- `outline-arrow-left`: &#x21E6;,
- `outline-arrow-up`: &#x21E7;,
- `outline-arrow-right`: &#x21E8;,
- `outline-arrow-down`: &#x21E9;,
- `outline-split-arrow-up`: &#x21EA;,
- `outline-split-double-arrow-up`: &#x21EE;,

- `thin-arrow-top-left-corner`: &#x21F1;,
- `thin-arrow-bottom-right-corner`: &#x21F2;,

- `thin-outline-arrow-left`: &#x21FD;,
- `thin-outline-arrow-right`: &#x21FE;,

- `short-fat-arrow-right`: &#x27A7;,

- `short-arrow-left`: &#xFFE9;,
- `short-arrow-top`: &#xFFEA;,
- `short-arrow-right`: &#xFFEB;,
- `short-arrow-bottom`: &#xFFEC;,

- `arrowhead-right`: &#x27A4;,

- `arrow-left-right`: &#x2194;,
- `arrow-up-down`: &#x2195;,

- `arched-arrow-left`: &#x20D4;,
- `arched-arrow-right`: &#x20D5;,
- `wavy-arrow-left`: &#x219C;,
- `wavy-arrow-right`: &#x219D;,

- `thin-arrow-left`: &#x2190;,
- `thin-arrow-up`: &#x2191;,
- `thin-arrow-right`: &#x2192;,
- `thin-arrow-down`: &#x2193;,
- `thin-arrow-up-down`: &#x21C5;,
- `thin-arrow-left-right`: &#x21C6;,
- `thin-arrow-top-left`: &#x2196;,
- `thin-arrow-top-right`: &#x2197;,
- `thin-arrow-bottom-right`: &#x2198;,
- `thin-arrow-bottom-left`: &#x2199;,

### Angles

- `chevron-left`: &#x276C;,
- `chevron-right`: &#x276D;,
- `heavy-chevron-left`: &#x2770;,
- `heavy-chevron-right`: &#x2771;,

- `small-angle-left`: &#x2039;,
- `small-angle-right`: &#x203A;,
- `small-angle-up`: &#x02C6;,
- `small-angle-down`: &#x02C7;,

- `angle-left`: &#x1438;,
- `angle-right`: &#x1433;,

- `wide-angle-up`: &#xFE3F;,
- `wide-angle-down`: &#xFE40;,
- `wide-angle-left`: &#x2329;,
- `wide-angle-right`: &#x232A;,

### Triangles

- `triangles-up-down`: &#x02D0;,

- `triangle-left`: &#x25C4;,
- `triangle-up`: &#x25B2;,
- `triangle-right`: &#x25BA;,
- `triangle-down`: &#x25BC;,

- `outline-triangle-left`: &#x25C1;,
- `outline-triangle-up`: &#x25B3;,
- `outline-triangle-right`: &#x25B7;,
- `outline-triangle-down`: &#x25BD;,

- `small-triangle-left`: &#x25C2;,
- `small-triangle-up`: &#x25B4;,
- `small-triangle-right`: &#x25B8;,
- `small-triangle-down`: &#x25BE;,

- `outline-small-triangle-left`: &#x25C3;,
- `outline-small-triangle-up`: &#x25B5;,
- `outline-small-triangle-right`: &#x25B9;,
- `outline-small-triangle-down`: &#x25BF;,

- `outline-narrow-triangle-left`: &#x22B2;,
- `outline-narrow-triangle-right`: &#x22B3;,

### Crosses and checks

- `small-cross`: &#x02DF;,
- `cross`: &#x2715;,
- `thin-cross`: &#x2573;,
- `heavy-cross`: &#x2716;,
- `handwritten-cross`: &#x2718;,

- `checkmark`: &#x2714;,
- `check`: &#x2713;,
- `check-heavy`: &#x2714;,
- `square`: &#x2610;,
- `checked-square`: &#x2611;,

### Weather

- `sun`: &#x2600;,
- `outline-sun`: &#x263C;,
- `outline-moon`: &#x263E;,
- `cloud`: &#x2601;,
- `umbrella`: &#x2602;,
- `snowman`: &#x2603;,
- `comet`: &#x2604;,

### Misc

- `degree`: &#x00B0;,
- `middot`: &#x00B7;,
- `bullet`: &#x2022;,
- `shelf`: &#x02FD;,
- `female`: &#x2640;,
- `male`: &#x2642;,
- `music`: &#x266B;,
- `recycling`: &#x267B;,
- `outline-flag`: &#x2690;,
- `flag`: &#x2691;,
- `outline-circle-dot-right`: &#x2686;,
- `circle-dot-right`: &#x2688;,
- `outline-circle-dot-double`: &#x2687;,
- `circle-dot-double`: &#x2689;,
- `atom`: &#x269B;,
- `warning`: &#x26A0;,
- `baseball`: &#x26BE;,
- `ornament-quote-down`: &#x275D;,
- `ornament-quote-up`: &#x275E;,
- `search`: &#x05A0;,
- `infinity`: &#x221E;,
- `infinity-vertical`: &#x0B03;,
- `circle`: &#x0CE6;,
- `dot-on-line`: &#x16BD;,
- `ellipsis`: &#x2026;,
- `ellipsis-vertical`: &#x205D;,
- `forbidden`: &#x20E0;,
- `trademark`: &#x2122;,
- `copyright`: &#x00A9;,
- `registered`: &#x00AE;,
- `info`: &#x2139;,
- `asterisk`: &#x2217;,
- `bacon`: &#x2248;,
- `hamburger`: &#x2261;,
- `quadruple-hamdurger`: &#x2263;,
- `crosshairs`: &#x22B9;,
- `star`: &#x2605;,
- `outline-star`: &#x2606;,
- `osx-cmd`: &#x2318;,
- `delete-right`: &#x2326;,
- `delete-left`: &#x232B;,
- `print`: &#x2399;,
- `eject`: &#x23CF;,
- `telephone`: &#x260E;,
- `outline-telephone`: &#x260F;,
- `scissors`: &#x2701;,
- `circle-telephone`: &#x2706;,
- `airplane`: &#x2708;,
- `mail`: &#x2709;,
- `heart`: &#x2764;,
- `circled-plus`: &#x2295;,
- `circled-minus`: &#x2296;,
- `circled-cross`: &#x2297;,
- `circled-slash`: &#x2298;,
- `circled-equals`: &#x229C;,
- `hand-left`: &#x261A;,
- `hand-right`: &#x261B;,
- `outline-hand-left`: &#x261C;,
- `outline-hand-right`: &#x261E;,
- `outline-hand-down`: &#x261F;,
- `writing-hand`: &#x270D;,
- `pen`: &#x270E;,
- `skull-bones`: &#x2620;,
- `radiation`: &#x2622;,
- `biohazard`: &#x2623;,
- `aesculapius-staff`: &#x2695;,
- `peace`: &#x262E;,
- `yin-yang`: &#x262F;,
- `sad-face`: &#x2639;,
- `outline-smiling-face`: &#x263A;,
- `smiling-face`: &#x263B;,