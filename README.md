# Orca Whale JS
<p>
  Trying to recreate the
  <a href="http://img0.liveinternet.ru/images/attach/c/5/3970/3970473_sprite198.swf" target="_blank">Flash orca whale</a>
  just using HTML, JS and CSS.
</p>
<p>You can see a live demo <a href="http://lordfido.github.io/orca" target="_blank">here</a>. It's in a very early state.</p>

# Debugging
<p>I have implemented some debug parameters, so you can 'play' with them. Just place <code>?debug=true&code=true</code> where you can replace <code>code</code> with:
<ul>
  <li><code>wireframes</code>: This will draw square lines arround each piece of the whale.</li>
  <li><code>transparent</code>: This will remove the image from each piece of the whale.</li>
  <li><code>background</code>: This will color each piece with black at 10% opacity, replacing its image. This also color pieces without image yet.</li>
  <li><code>no-water</code>: This will remove the water background.</li>
  <li><code>no-bubbles</code>: This will remove the bubbles effect.</li>
</ul>

<p>Try some URLs like:
<ul>
  <li><a href="http://lordfido.github.io/orca/?debug=true&no-water=true&wireframes=true" target="_blank">http://lordfido.github.io/orca/?debug=true&no-water=true&wireframes=true</a></li>
  <li><a href="http://lordfido.github.io/orca/?debug=true&no-bubbles=true&no-water=true" target="_blank">http://lordfido.github.io/orca/?debug=true&no-bubbles=true&no-water=true</a></li>
</ul>

<p>This project was initiated by a teammates' challenge, in our free time.</p>
