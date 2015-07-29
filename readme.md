## Example

```html
<calculator settings='{
	"items": [
		{
			"field": {
				"type": "number",
				"model": "count"
			}
		}, {
			"label": "Work speed",
			"field": {
				"type": "range",
				"model": "speed",
				"attrs": {
					"min": "1",
					"max": "10"
				}
			}
		}, {
			"field": {
				"type": "select",
				"model": "cms",
				"options": {
					"Without CMS": "1",
					"NetCat": "2",
					"1C Bitrix": "3",
					"Wordpress": "4"
				}
			}
		}, {
			"label": "Responsive",
			"field": {
				"type": "checkbox",
				"model": "responsive"
			}
		}
	]
}'>
</calculator>
```

![example](http://i.imgur.com/EQZDHxH.png)


## Roadmap

+ Replace recalculation function from the js file
+ Minimize settings...