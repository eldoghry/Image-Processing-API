<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Image_Processing_API_0"></a>Image Processing API</h1>
<h2 class="code-line" data-line-start=1 data-line-end=2 ><a id="BY__Mohamed_Magdy__1"></a>BY: <em>Mohamed Magdy</em></h2>
<p class="has-line-data" data-line-start="3" data-line-end="4">using Node JS, Express, Sharp</p>
<h2 class="code-line" data-line-start=5 data-line-end=6 ><a id="Features_5"></a>Features</h2>
<ul>
<li class="has-line-data" data-line-start="6" data-line-end="7">Resize images with different formats</li>
<li class="has-line-data" data-line-start="7" data-line-end="9">Supported format: png, jpg, jpeg, webp</li>
</ul>
<h2 class="code-line" data-line-start=9 data-line-end=10 ><a id="USAGE_9"></a>USAGE</h2>
<p class="has-line-data" data-line-start="10" data-line-end="12">PATH: <code>/api/images</code><br>
Method: GET</p>
<table class="table table-striped table-bordered">
<thead>
<tr>
<th>Parameter</th>
<th>Required</th>
</tr>
</thead>
<tbody>
<tr>
<td>filename</td>
<td>Yes</td>
</tr>
<tr>
<td>width</td>
<td>Yes</td>
</tr>
<tr>
<td>height</td>
<td>No (default height = width)</td>
</tr>
</tbody>
</table>
<p class="has-line-data" data-line-start="18" data-line-end="20">Example:<br>
<code>/api/images?filename=imagename.jpg&amp;width=200&amp;height=300</code></p>
<p class="has-line-data" data-line-start="21" data-line-end="23">Extenstion can be omitted, new image will be <code>jpg</code> by default<br>
<code>/api/images?filename=imagename&amp;width=200&amp;height=300</code></p>
<p class="has-line-data" data-line-start="24" data-line-end="26">Height can be omitted, height of new image will be same as width<br>
<code>/api/images?filename=imagename.jpg&amp;width=200</code></p>