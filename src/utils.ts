/**
 * This will replace the content fetched from `path` into `selector`.
 * The content is assumed to not be an entire html page but a chunk of it.
 */
export function renderContent(
	content: string,
	selector = window.PineconeRouter.settings.viewSelector ?? '#app'
) {
	// replace with xpath?
	var domParser = new DOMParser()
	var view = domParser.parseFromString(content, 'text/html')
	var scriptsClassname = 'app-scripts'
	document.querySelectorAll('.' + scriptsClassname).forEach(script => script.remove())
	var scripts = view.querySelectorAll('script')
	scripts.forEach(script => {
		script.remove()
		var scriptToInsert = document.createElement('script')
		scriptToInsert.className = 'app-scripts'
		scriptToInsert.textContent = script.textContent
		document.body.appendChild(scriptToInsert)
	})
	// replace the content of the selector with the fetched content
	document.querySelector(selector)!.replaceChildren(...Array.prototype.slice.call(view.body.childNodes, 0))
	// @ts-ignore
	document.querySelector('[autofocus]')?.focus()
}
