var scriptsClassname = 'app-scripts'

/**
 * This will replace the content fetched from `path` into `selector`.
 * The content is assumed to not be an entire html page but a chunk of it.
 */
export function renderContent(
	content: string,
	selector = window.PineconeRouter.settings.viewSelector ?? '#app'
) {
	// create view placeholder from fetched content
	var view = document.createElement('div')
	view.innerHTML = content;

	// remove all previous view scripts
	document.querySelectorAll('.' + scriptsClassname).forEach(script => script.remove())
	// insert all new view scripts 
	view.querySelectorAll('script').forEach(script => {
		script.remove()
		var scriptClone = document.createElement('script')
		scriptClone.className = scriptsClassname
		scriptClone.textContent = script.textContent
		document.body.appendChild(scriptClone)
	})

	// replace previous view content with the fetched content
	document.querySelector(selector)!.replaceChildren(...Array.from(view.childNodes))
	// @ts-ignore
	document.querySelector('[autofocus]')?.focus()
}
