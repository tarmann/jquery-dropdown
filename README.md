# jQuery Dropdown Plugin

A simple and lighweight jQuery plugin for creating dropdown menus.

### Installation

Include script after the jQuery library:

```html
<script type="text/javascript" src="/path/to/jquery-dropdown.js"></script>
```

### Usage

```js
$('.dropdown').dropdown( options )
```

### Options

#### toggleOn (string)

Display the dropdown menu on `click` or `hover`.

```js
toggleOn: 'click'
```

#### closeOnBlur (boolean)

Close dropdown menu when click outsite the element.

```js
closeOnBlur: true
```

#### expandedClass (string)

Set the class that will be added to the element when expanded.

```js
expandedClass: 'expanded'
```

#### elementLabelClass (string)

Selector of the element used as the label on the dropdown.

```js
elementLabel: '.sdui-dropdown-label'
```

#### elementContent (string)

Selector of the element used as the content on the dropdown.

```js
elementContent: '.sdui-dropdown-content'
```

### TODO

* Handle which should be in front 
* Close open elements inside a group items when closeOnBlur: false

## License

MIT License
(c) [Bruno Tarmann](http://tarmann.com.br)