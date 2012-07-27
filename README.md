## multicheck &nbsp;&nbsp;&nbsp; `jquery checkbox group plugin`

A jQuery plugin for grouping checkboxes with a parent checkbox of similar type.

### Usage :

Create checkboxes group and a parent checkbox with data attributes 
`check` equalto `child` for children group and `check` equalto `parent` for parent checkbox
and all the checkboxes having similar data attr `name` (which all are grouped with respective parent)
and call the plugin on the parent checkbox

eg:

	<div class="group">
		<input type="checkbox" data-check="parent" data-name="name">
		<div class="children">
			<input type="checkbox" data-check="child" data-name="name">
			...
		</div>
	</div>
	
	$('input[data-check=parent]').multicheck();



### Example :

	<div class="group">
		<input type="checkbox" data-check="parent" data-name="name1">Nums
		<div class="children">
			<input type="checkbox" data-check="child" data-name="name1">One
			<input type="checkbox" data-check="child" data-name="name1">Two
			<input type="checkbox" data-check="child" data-name="name1">Three
			<input type="checkbox" data-check="child" data-name="name1">Four
		</div>
	</div>
	
	<div class="group">
		<input type="checkbox" data-check="parent" data-name="name2">Alphas
		<div class="children">
			<input type="checkbox" data-check="child" data-name="name2">A
			<input type="checkbox" data-check="child" data-name="name2">B
			<input type="checkbox" data-check="child" data-name="name2">C
			<input type="checkbox" data-check="child" data-name="name2">D
		</div>
	</div>
	
	$('input[data-check=parent]').multicheck();
	
	
## Copyright and license

Copyright 2012, Sandeep Vemula _aka_ bittu

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.