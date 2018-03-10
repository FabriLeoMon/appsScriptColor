// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @output_file_name default.js
// ==/ClosureCompiler==

// TODO: keyboard shortcut to navigate between coding tab
// TODO: custom auto-complete functions list


(function () {
	// quit if the current page is not editing the script
	if (!/\/edit$/.test(document.location.pathname)) return;
	
	let asc = {
		defaultTheme: 'Darcula',
		theme: {
			'Black fox Console': {
				generalVariables: {
					'codeBackGround': '#14171A',
					'generalBackGround': '#343c45',
					'generalText': '#a9bacb',
					'border': '#5C6773',
					'listItemBackground': '#1d4f73',
					'listItemBackgroundSelected': '#174262',
					'tabBackGround': '#2a3037',
					'listItemSelected': '#F5F7FA'
				},
				cssRules: {
					'.editor .code-area .CodeMirror': {'background-color': '{{codeBackGround}}', 'line-height': '17px'},
					'.editor .code-area .CodeMirror pre': {'color': '#CDD7E0'}, // punctuation
					
					'.editor .code-area .CodeMirror-cursor': {'border-left': '1px solid #fff!important'},
					'.CodeMirror-focused div.CodeMirror-selected': {'background-color': '#3D484A'}, // selection background
					'div.CodeMirror-selected': {'background-color': '#3D484A'},
					
					// color of auto-complete-list
					'.autocomplete': {'background-color': '{{tabBackGround}}'},
					'.autocomplete .selected': {'background-color': '{{codeBackGround}}', 'color': '{{listItemSelected}}'},
					
					// line number area
					'.editor .code-area .CodeMirror-gutter': {
						'background-color': '{{codeBackGround}}',
						'border-left': '1px solid',
						'border-right': '1px solid',
						'border-color': '{{border}}'
					},
					'.editor .code-area .CodeMirror-gutter-text': {
						'background-color': '{{codeBackGround}}',
						'box-shadow': '-1px 0px 0px 0px {{border}}, 1px 0px 0px 0px {{border}}'
					}, // background des numéros de ligne
					'.editor .code-area .CodeMirror-gutter-text pre': {'color': '{{border}}'}, // line number
					
					// color of code
					'.cm-s-default span.cm-keyword': {'color': '#ba4'}, // key words
					'.cm-s-default span.cm-atom': {'color': '#BE3F42'}, // constant : true / false / undefined etc...
					'.cm-s-default span.cm-number': {'color': '#5F9F5B'}, // Numbers
					'.cm-s-default span.cm-def': {'color': '#3689B2'}, // variable's definition / function and others
					'.cm-s-default span.cm-variable': {'color': '#3689B2'},
					'.cm-s-default span.cm-variable-2': {'color': '#CDD7E0'},
					'.cm-s-default span.cm-variable-3': {'color': '#3689B2'},
					'.cm-s-default span.cm-property': {'color': '#3689B2'},
					'.cm-s-default span.cm-operator': {'color': '#A9BACB'},
					'.cm-s-default span.cm-comment': {'color': '#5C6773'}, // comments
					'.cm-s-default span.cm-string': {'color': '#BC8154'}, // String
					'.cm-s-default span.cm-string-2': {'color': '#f50'}, // regular expression & CSS properties
					'.cm-s-default span.cm-meta': {'color': '#555'},
					'.cm-s-default span.cm-error': {'color': '#FF2E0B'}, // erroneous HTML code like : "zer"zer class='zer'
					'.cm-s-default span.cm-qualifier': {'color': '#555'},
					'.cm-s-default span.cm-builtin': {'color': '#30a'},
					'.cm-s-default span.cm-bracket': {'color': '#997'},
					'.cm-s-default span.cm-tag': {'color': '#A673BF'}, // HTML tag
					'.cm-s-default span.cm-attribute': {'color': '#3689B2'}, // HTML attribute
					'.cm-s-default span.cm-header': {'color': '#00ECFF'}, // HTML template token : <?=  ?>
					'.cm-s-default span.cm-quote': {'color': '#090'},
					'.cm-s-default span.cm-hr': {'color': '#999'},
					'.cm-s-default span.cm-link': {'color': '#00c'},
					
					// UI colors
					'.editor .gwt-TabLayoutPanelTabs': {'background-color': '{{generalBackGround}}', 'border-color': '{{border}}'},
					'.editor .gwt-TabLayoutPanelTab': {'background-color': '{{tabBackGround}}', 'border-color': '{{border}}'},
					'.editor .gwt-TabLayoutPanelTab:hover .name, .editor .gwt-TabLayoutPanelTab-selected .tab-header .name': {'color': '{{generalText}}'},
					'.editor .gwt-TabLayoutPanelTab-selected:hover': {'background-color': '{{codeBackGround}}'},
					'.editor .gwt-TabLayoutPanelTab:hover': {'background-color': '{{codeBackGround}}'},
					
					// resource panel
					'.resource-list': {'background-color': '{{generalBackGround}}', 'color': '{{generalText}}'},
					'.resource-list .project-items-list .item': {'border-bottom': '1px solid {{border}}'},
					'.resource-list .project-items-list .selected, .resource-list .project-items-list .selected:hover': {
						'background-color': '{{listItemBackground}}',
						'color': '{{listItemSelected}}'
					},
					'.resource-list .project-items-list .focused, .resource-list .project-items-list .item:hover': {
						'background-color': '{{listItemBackgroundSelected}}',
						'color': '{{generalText}}'
					},
					
					// drag bar
					'.workspace .gwt-SplitLayoutPanel-HDragger': {'background-color': '#000!important', 'border-left': '1px solid {{border}}!important'},
					'.workspace .gwt-SplitLayoutPanel-VDragger': {'background-color': '#000!important', 'border-top': '1px solid {{border}}!important'},
					'.workspace .gwt-SplitLayoutPanel-HDragger:hover, .workspace .gwt-SplitLayoutPanel-VDragger:hover': {'background-color': '#222!important'},
					
					// Status bar
					'.status-bar': {'background-color': '{{generalBackGround}}', 'border-top': '1px solid {{border}}'},
					
					// general colors
					'body': {'color': '{{generalText}}'},
					
					// Debug section
					'.workspace .aux-info': {'background-color': '{{generalBackGround}}'},
					'.workspace .aux-info .debugger-frame-label': {'background-color': '{{listItemBackground}}'},
					'.workspace .aux-info .debugger-frame-label-selected': {'background-color': '{{listItemBackgroundSelected}}', 'color': '{{generalText}}'},
					'.workspace .aux-info .debugger-callstack-wrapper': {'border-left': '1px solid {{border}}', 'border-top': '1px solid {{border}}'},
					'.workspace .aux-info .treetable-wrapper': {'border-left': '1px solid {{border}}', 'border-top': '1px solid {{border}}'},
					'.workspace .aux-info .treetable-background-2': {'background-color': '{{generalBackGround}}'},
					'.workspace .aux-info .treetable-background-1': {'background-color': '#2a3037'},
					
					// scrollBar
					'.CodeMirror-scroll.cm-s-default::-webkit-scrollbar-thumb': {'background-color': '#5C6773'},
					
					// Correction to context Menu
					'.resource-context-menu': {color: '{{generalBackGround}}'},
					
					// CUSTOM Menu folder
					'.asc_FolderAdd': {
						'background-color': '{{codeBackGround}}',
						'border': '1px solid {{border}}'
					},
					'.asc_FolderAdd:hover': {
						'background-color': '{{listItemBackgroundSelected}}'
					},
					'.asc_folder_container': {
						'border-bottom': '5px solid {{border}}'
					},
					'.asc_Folder:not(.asc_folder_closed)': {
						'border-bottom': '5px solid {{border}}'
					}
				}
			},
			'Darcula': {
				generalVariables: {
					'codeBackGround': '#2B2B2B',
					'generalBackGround': '#3c3f41',
					'generalText': '#bbbbbb',
					'border': '#242627',
					'listItemBackground': '#4b6eaf',
					'listItemBackgroundSelected': '#0d293e',
					'tabBackGround': '#515658',
					'listItemSelected': '#bbbbbb'
				},
				cssRules: {
					'.editor .code-area .CodeMirror': {'background-color': '{{codeBackGround}}', 'line-height': '17px'},
					'.editor .code-area .CodeMirror pre': {'color': '{{generalText}}'}, // punctuation
					
					'.editor .code-area .CodeMirror-cursor': {'border-left': '1px solid #fff!important'},
					'.CodeMirror-focused div.CodeMirror-selected': {'background-color': '#214283'}, // selection background
					'div.CodeMirror-selected': {'background-color': '#214283'},
					
					// color of auto-complete-list
					'.autocomplete': {'background-color': '{{tabBackGround}}'},
					'.autocomplete .selected': {'background-color': '{{codeBackGround}}', 'color': '{{listItemSelected}}'},
					
					// line number area
					'.editor .code-area .CodeMirror-gutter': {
						'background-color': '{{codeBackGround}}',
						'border-left': '1px solid',
						'border-right': '1px solid',
						'border-color': '{{border}}'
					},
					'.editor .code-area .CodeMirror-gutter-text': {
						'background-color': '{{codeBackGround}}',
						'box-shadow': '-1px 0px 0px 0px {{border}}, 1px 0px 0px 0px {{border}}'
					}, // background des numéros de ligne
					'.editor .code-area .CodeMirror-gutter-text pre': {'color': '888888'}, // line number
					
					// color of code
					'.cm-s-default span.cm-keyword': {'color': '#cc7832'}, // keywords
					'.cm-s-default span.cm-atom': {'color': '#cc7832'}, // constant : true / false / undefined etc...
					'.cm-s-default span.cm-number': {'color': '#6897bb'}, // Numbers
					'.cm-s-default span.cm-def': {'color': '#ffc66d'}, // definition of variable / function and others
					'.cm-s-default span.cm-variable': {'color': '#ffc66d'},
					'.cm-s-default span.cm-variable-2': {'color': '#CDD7E0'},
					'.cm-s-default span.cm-variable-3': {'color': '#ffc66d'},
					'.cm-s-default span.cm-property': {'color': '#9876aa'}, // properties in an object
					'.cm-s-default span.cm-operator': {'color': '{{generalText}}'},
					'.cm-s-default span.cm-comment': {'color': '#888888'}, // comments
					'.cm-s-default span.cm-string': {'color': '#6a8759'}, // String
					'.cm-s-default span.cm-string-2': {'color': '#f50'}, // regular expression & CSS properties
					'.cm-s-default span.cm-meta': {'color': '#555'},
					'.cm-s-default span.cm-error': {'color': '#FF2E0B'}, // erroneous HTML code like : "zer"zer class='zer'
					'.cm-s-default span.cm-qualifier': {'color': '#FF861E'}, // CSS path
					'.cm-s-default span.cm-builtin': {'color': '#FF861E'}, // used for CSS #id (a bug probably)
					'.cm-s-default span.cm-bracket': {'color': '#997'},
					'.cm-s-default span.cm-tag': {'color': '#ffc66d'}, // HTML tag
					'.cm-s-default span.cm-attribute': {'color': '#A772D0'}, // HTML attribute
					'.cm-s-default span.cm-header': {'color': '#00ECFF'}, // HTML template token : <?=  ?>
					'.cm-s-default span.cm-quote': {'color': '#090'},
					'.cm-s-default span.cm-hr': {'color': '#999'},
					'.cm-s-default span.cm-link': {'color': '#00c'},
					
					// UI colors
					'.editor .gwt-TabLayoutPanelTabs': {'background-color': '{{generalBackGround}}', 'border-color': '{{border}}'},
					'.editor .gwt-TabLayoutPanelTab': {'background-color': '{{tabBackGround}}', 'border-color': '{{border}}'},
					'.editor .gwt-TabLayoutPanelTab:hover .name, .editor .gwt-TabLayoutPanelTab-selected .tab-header .name': {'color': '{{generalText}}'},
					'.editor .gwt-TabLayoutPanelTab-selected:hover': {'background-color': '{{codeBackGround}}'},
					'.editor .gwt-TabLayoutPanelTab:hover': {'background-color': '{{codeBackGround}}'},
					
					// resource panel
					'.resource-list': {'background-color': '{{generalBackGround}}', 'color': '{{generalText}}'},
					'.resource-list .project-items-list .item': {'border-bottom': '1px solid {{border}}'},
					'.resource-list .project-items-list .selected, .resource-list .project-items-list .selected:hover': {
						'background-color': '{{listItemBackground}}',
						'color': '{{listItemSelected}}'
					},
					'.resource-list .project-items-list .focused, .resource-list .project-items-list .item:hover': {
						'background-color': '{{listItemBackgroundSelected}}',
						'color': '{{generalText}}'
					},
					
					// drag bar
					'.workspace .gwt-SplitLayoutPanel-HDragger': {'background-color': '{{generalBackGround}}!important', 'border-left': '1px solid {{border}}!important'},
					'.workspace .gwt-SplitLayoutPanel-VDragger': {'background-color': '{{generalBackGround}}!important', 'border-top': '1px solid {{border}}!important'},
					'.workspace .gwt-SplitLayoutPanel-HDragger:hover, .workspace .gwt-SplitLayoutPanel-VDragger:hover': {'background-color': '{{listItemBackgroundSelected}}!important'},
					
					// Status bar
					'.status-bar': {'background-color': '{{generalBackGround}}', 'border-top': '1px solid {{border}}'},
					
					// general colors
					'body': {'color': '{{generalText}}'},
					
					// Debug section
					'.workspace .aux-info': {'background-color': '{{generalBackGround}}'},
					'.workspace .aux-info .debugger-frame-label': {'background-color': '{{listItemBackground}}'},
					'.workspace .aux-info .debugger-frame-label-selected': {'background-color': '{{listItemBackgroundSelected}}', 'color': '{{generalText}}'},
					'.workspace .aux-info .debugger-callstack-wrapper': {'border-left': '1px solid {{border}}', 'border-top': '1px solid {{border}}'},
					'.workspace .aux-info .treetable-wrapper': {'border-left': '1px solid {{border}}', 'border-top': '1px solid {{border}}'},
					'.workspace .aux-info .treetable-background-2': {'background-color': '{{generalBackGround}}'},
					'.workspace .aux-info .treetable-background-1': {'background-color': '#49473f'},
					
					// scrollBar
					'.CodeMirror-scroll.cm-s-default::-webkit-scrollbar-thumb': {'background-color': 'rgba(134, 130, 115, 0.45)'},
					
					// Correction to context Menu
					'.resource-context-menu': {color: '{{generalBackGround}}'},
					
					// CUSTOM Menu folder
					'.asc_FolderAdd': {
						'background-color': '{{codeBackGround}}',
						'border': '1px solid {{border}}'
					},
					'.asc_FolderAdd:hover': {
						'background-color': '{{listItemBackgroundSelected}}'
					},
					'.asc_folder_container': {
						'border-bottom': '5px solid {{border}}'
					},
					'.asc_Folder:not(.asc_folder_closed)': {
						'border-bottom': '5px solid {{border}}'
					}
				}
			},
			'Default': {
				generalVariables: {
					'codeBackGround': 'white',
					'border': '#D9D9D9',
					'listItemBackgroundSelected': '#f5f5f5'
				},
				cssRules: {
					// CUSTOM Menu folder
					'.asc_FolderAdd': {
						'background-color': '{{codeBackGround}}',
						'border': '1px solid {{border}}'
					},
					'.asc_FolderAdd:hover': {
						'background-color': '{{listItemBackgroundSelected}}'
					},
					'.asc_folder_container': {
						'border-bottom': '5px solid {{border}}'
					},
					'.asc_Folder:not(.asc_folder_closed)': {
						'border-bottom': '5px solid {{border}}'
					}
				}
			}
		},
		userTheme: '',
		
		_divCmCustomStyle: null,
		
		initColors: function () {
			// Fetch user pref
			asc.userTheme = localStorage.getItem('appScriptColor-theme') || asc.defaultTheme;
			
			// inject custom CSS
			asc.useCustomStyle(asc.theme[asc.userTheme] || 'Default');
			
			
			// create an observer instance to detect <style> insertion: when need to be the last styleSheet
			let observer = new MutationObserver(mutations => {
				mutations.forEach(mutation => {
					for (let item in mutation.addedNodes) {
						let node = mutation.addedNodes[item];
						
						// Filter for STYLE elements (other than our styleSheet)
						if (node.tagName !== 'STYLE' || node.id === 'cmCustomStyle') continue;
						
						// Move style node to the end for the HEAD
						document.head.appendChild(this._divCmCustomStyle);
					}
				});
			});
			
			// configuration of the observer:
			let config = {
				childList: true,
				attributes: false,
				characterData: false/*,
				 subtree: false,
				 attributeOldValue: false,
				 characterDataOldValue: false,
				 attributeFilter: []
				 */
			};
			
			// pass in the target node, as well as the observer options
			//noinspection JSCheckFunctionSignatures
			observer.observe(document.head, config);
		},
		useCustomStyle: function (customTheme) {
			// Select theme if a theme name is passed
			if (typeof customTheme !== 'object') {
				customTheme = asc.theme[customTheme || 'Default'];
			}
			
			// Init the custom style element
			if (!this._divCmCustomStyle) {
				this._divCmCustomStyle = document.createElement('style');
				this._divCmCustomStyle.setAttribute('id', 'cmCustomStyle');
			}
			
			this._divCmCustomStyle.innerHTML = this.cssBuilder(customTheme.cssRules, customTheme.generalVariables);
			
			// add style element last in the HEAD
			document.head.appendChild(this._divCmCustomStyle);
		},
		/**
		 * build css string
		 */
		cssBuilder: function (css, variables) {
			let cssSheet = '';
			
			for (let selector in css) {
				// build one rule
				let propertyStr = '',
					cssSettings = css[selector];
				
				for (let property in cssSettings) {
					// replace declared variables
					propertyStr += `${ property }:${ cssSettings[property].replace(/{{(\w+)}}/g, (m, p1) => p1 in variables ? variables[p1] : m) };`;
				}
				
				cssSheet += `${selector}{${propertyStr}}`;
			}
			
			return cssSheet;
		},
		
		storeThemeChosen: function (themeName) {
			localStorage.setItem('appScriptColor-theme', themeName);
			asc.userTheme = themeName;
		},
		
		menuColorState: false,
		addSubMenuItem: function (domSubMenu, text, callBack) {
			let domItem = document.createElement('div');
			domItem.classList.add('goog-menuitem');
			domItem.classList.add('apps-menuitem');
			
			domItem.innerHTML =
				`<div class="goog-menuitem-content" style="-webkit-user-select: none;">
	<div class="docs-icon goog-inline-block goog-menuitem-icon asc-menu-item-icon" data-theme="${text}" style="-webkit-user-select:none;">
		<div class="docs-icon-img-container docs-icon-img docs-icon-arrow-more" style="-webkit-user-select: none;"></div>
	</div>
	<span class="goog-menuitem-label" style="-webkit-user-select: none;">${text}</span>
</div>`;
			
			domSubMenu.appendChild(domItem);
			
			// add function listeners
			domItem.addEventListener('mouseenter', function () {
				domItem.classList.toggle('goog-menuitem-highlight', true);
			});
			domItem.addEventListener('mouseleave', function () {
				domItem.classList.toggle('goog-menuitem-highlight', false);
			});
			domItem.addEventListener('click', callBack);
		},
		insertMenuButton: function () {
			//noinspection CssUnusedSymbol
			document.head.insertAdjacentHTML('beforeEnd', `<style>.asc-menu-item-icon{display: none;}.asc-menu-item-icon-display{display: inherit;}</style>`);
			
			let googleScriptMenu = document.getElementById('docs-menubar');
			// no menu, we quit now
			if (!googleScriptMenu) return;
			
			let menuColor = '<div id="macros-color-menu" class="menu-button goog-control goog-inline-block" style="-webkit-user-select: none;">Colors</div>';
			
			let domMenuColorSub = document.createElement('div');
			domMenuColorSub.classList.add('goog-menu');
			domMenuColorSub.classList.add('goog-menu-vertical');
			domMenuColorSub.classList.add('goog-menu-noaccel');
			domMenuColorSub.classList.add('docs-menu-hide-mnemonics');
			domMenuColorSub.setAttribute('style', 'display: None;');
			
			// add menu item for each theme
			for (let theme in asc.theme) {
				asc.addSubMenuItem(
					domMenuColorSub,
					theme,
					function (theme) {
						asc.useCustomStyle(asc.theme[theme]);
						asc.storeThemeChosen(theme);
						
						domMenuColor.classList.toggle('goog-control-open', false);
						domMenuColorSub.setAttribute('style', 'display: None;');
					}.bind(null, theme)
				);
			}
			
			// insert Menu
			googleScriptMenu.insertAdjacentHTML('beforeEnd', menuColor);
			// insert SubMenu
			document.body.appendChild(domMenuColorSub);
			
			let domMenuColor = document.getElementById('macros-color-menu'),
				domMenuShield = document.getElementById('docs-menu-shield');
			
			// add similar behaviour then other menu buttons
			domMenuColor.addEventListener('mouseenter', function () {
				domMenuColor.classList.toggle('goog-control-hover', true);
			});
			domMenuColor.addEventListener('mouseleave', function () {
				domMenuColor.classList.toggle('goog-control-hover', false);
			});
			
			// display the menu
			domMenuColor.addEventListener('click', function () {
				
				let domItemIcons = domMenuColorSub.querySelectorAll('.asc-menu-item-icon');
				for (let i = 0; i < domItemIcons.length; i++) {
					domItemIcons[i].classList.toggle('asc-menu-item-icon-display', (domItemIcons[i].getAttribute('data-theme') === asc.userTheme));
				}
				
				domMenuColor.classList.toggle('goog-control-hover', false);
				domMenuColor.classList.toggle('goog-control-open', true);
				
				let menuRect = domMenuColor.getBoundingClientRect();
				
				domMenuColorSub.setAttribute('style',
					`user-select: none;
visibility: visible;
left: ${menuRect.left}px;
top: ${menuRect.bottom}px;`
				);
				
				domMenuShield.setAttribute('style',
					`left: ${menuRect.left + 1}px;
top: ${menuRect.bottom - 1}px;
width: ${menuRect.width - 2}px;
height: 7px;`
				);
				
				asc.menuColorState = true;
			});
			
			// Close menu when click event on document
			document.body.addEventListener('click', function (event) {
				if (!asc.menuColorState) return;
				
				for (let i = 0; i < event['path'].length; i++) {
					if (event['path'][i] === domMenuColorSub || event['path'][i] === domMenuColor) return;
				}
				
				domMenuColor.classList.toggle('goog-control-open', false);
				domMenuColorSub.setAttribute('style', 'display: None;');
			});
			
			
			/*
			 // we will use the menu shield to monitor menu state
			 // create an observer instance
			 var observer = new MutationObserver(function (mutations) {
			 mutations.forEach(function (mutation) {
			 if ((mutation.target.style.display == 'none' && domMenuColor.classList.contains('goog-control-open') && asc.onItem == false)) || mutation.target.style.left !=
			 (domMenuColor.getBoundingClientRect().left+1).toString() + 'px'){
			 domMenuColor.classList.toggle('goog-control-open', false);
			 domMenuColorSub.setAttribute('style', 'display: None;');
			 }
			 });
			 });
			 
			 // configuration of the observer:
			 var config = {
			 childList: true,
			 attributes: true,
			 characterData: false,
			 //subtree: false,
			 //attributeOldValue: false,
			 //characterDataOldValue: false,
			 attributeFilter: ['style']
			 };
			 
			 // pass in the target node, as well as the observer options
			 //noinspection JSCheckFunctionSignatures
			 observer.observe(domMenuShield, config);
			 */
		}
	};
	
	
	class GasFile  {
		
		/**
		 * Init a new file
		 *
		 * @param {string} path
		 * @param {Node | Element} node
		 */
		constructor(path, node){
			this.path = path;
			this.dom = {
				main: node
			};
			
			this.name = (/([^\/]+)$/.exec(path) || [])[1] || 'error';
		}
		
		
		/**
		 * Return file name
		 */
		toString(){
			return this.name;
		}
		
		// noinspection JSUnusedGlobalSymbols
		/**
		 * Return file name
		 */
		toJSON(){
			return this.toString();
		}
	}
	
	class GasFolder {
		
		/**
		 * Init a new folder
		 * 
		 * @param {string} name
		 */
		constructor(name){
			this.name = name;
			this.parentFolder = null;
			this.root = null;
			
			/** @type {Object.<GasFile | GasFolder>} */
			this.children = {};
			
			/** @type {Array.<GasFile | GasFolder>} */
			this.orderedChildren = [];
			
			/** @type {Object.<HTMLElement>} */
			this.dom = {
				main: undefined,
				title: undefined,
				childList: undefined,
			};
			this._createDOM();
		}
		
		
		//<editor-fold desc="# Private methods">
		
		/**
		 * Create internal dom structure of the Folder
		 * 
		 * @return {HTMLDivElement}
		 * @private
		 */
		_createDOM() {
			this.dom.main = document.createElement('div');
			this.dom.main.classList.add('asc_Folder');
			
			this.dom.main.innerHTML =
`<div class="asc_folder_title">${this.name}</div>
<div class="asc_folder_ChildList"></div>`;
			
			this.dom.title = this.dom.main.querySelector('.asc_folder_title');
			this.dom.childList = this.dom.main.querySelector('.asc_folder_ChildList');
		}
		
		/**
		 * Sort internal children list by name A-Z
		 * 
		 * @private
		 */
		_sortChildren() {
			this.orderedChildren.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
		}
		
		/**
		 * Set parent folder of this folder
		 *
		 * @param {GasFolder} parentFolder
		 *
		 * @return {GasFolder}
		 */
		_setParent(parentFolder){
			this.parentFolder = parentFolder;
			
			return this;
		}
		
		// </editor-fold>
		
		
		/**
		 * Add a child, either a folder or a file
		 *
		 * @param {GasFolder | GasFile} child
		 * @param {boolean} [noSort]
		 */
		addChild(child, noSort){
			this.children[child.name] = child;
			this.orderedChildren.push(child);
			
			!noSort && this._sortChildren();
			
			(child instanceof GasFolder) && child._setParent(this);
			
			return child;
		}
		
		/**
		 * Test if folder got a child with childName
		 * and return it
		 * 
		 * @param {string} childName
		 * 
		 * @return {null | GasFile | GasFolder}
		 */
		getChild(childName){
			return this.children[childName] || null;
		}
		
		/**
		 * Set root dom
		 *
		 * @param {Node | HTMLElement} node
		 */
		setRoot(node){
			// can't set a root to a non-top level folder
			if (this.parentFolder) return false;
			
			// Store rootNode
			this.root = node;
			
			// Put folder in root dom
			this.root.appendChild(this.dom.main);
			
			return this;
		}
		
		
		/**
		 * Deep sort folder and all subFolders
		 */
		sortAllChildren() {
			// Sort itself
			this._sortChildren();
			
			// Sort subFolders
			for (let i = 0; i < this.orderedChildren.length; i++){
				this.orderedChildren[i] instanceof GasFolder && this.orderedChildren[i].sortAllChildren();
			}
		}
		
		/**
		 * Move all children into current folder dom
		 * 
		 * If using deepAssign, all sub-folder will get their children in their dom
		 * 
		 * @param {boolean} deepAssign
		 */
		assignDomChildren(deepAssign) {
			// clear dom children list
			this.dom.childList.innerHTML = '';
			
			for (let i = 0; i < this.orderedChildren.length; i++){
				// Append direct child
				this.dom.childList.appendChild(this.orderedChildren[i].dom.main);
				
				// Go through all sub directories
				deepAssign && this.orderedChildren[i] instanceof GasFolder && this.orderedChildren[i].assignDomChildren(true);
			}
		}
		
		
		/**
		 * Return folder structure as JSON
		 */
		toString(){
			let sub = [];
			
			for (let name in this.children){
				if (this.children[name] instanceof GasFile){
					sub.push(name);
				}
				else{
					sub.push(JSON.parse(this.children[name].toString()));
				}
			}
			
			return JSON.stringify({[this.name]: sub});
		}
		
		// noinspection JSUnusedGlobalSymbols
		/**
		 * Return folder structure as JSON
		 */
		toJSON(){
			return this.toString();
		}
		
	}
	
	
	let Folders = {
		selector: {
			workspace: 'div.workspace',
			listFile: '.resource-list>.project-items-list-wrapper',
			listItem: '.project-items-list'
		},
		/**
		 * @type {Object.<HTMLElement>}
		 */
		dom: {
			gasProjectFiles: undefined,
			gasFileList: undefined,
			folderContainer: undefined,
		},
		
		CLASSNAME: {
			folderContainer: 'asc_folder_container',
		},
		
		folderList: [],
		itemMap: {},
		key: document.location.pathname.match(/\/([^\/]+?)\/edit/)[1],
		
		/**
		 * Wait for a specific node to be added in the DOM by the page
		 *
		 * @param {Node} target
		 * @param {string} childSelector
		 *
		 * @return {Promise.<Node>}
		 */
		setObserver: function (target, childSelector) {
			return new Promise(resolve => {
				
				/**
				 * @param {MutationRecord[]} mutations
				 * @param {MutationObserver} observer
				 */
				function observerCB(mutations, observer) {
					mutations.forEach(mutation => {
						for (let item in mutation.addedNodes) {
							if (!mutation.addedNodes.hasOwnProperty(item)) continue;
							
							let node = mutation.addedNodes[item],
								domChild = node.querySelector(childSelector);
							
							if (!domChild) continue;
							
							// We found the node, stop observing
							observer.disconnect();
							
							resolve(domChild);
						}
					});
				}
				
				let observer = new MutationObserver(observerCB);
				
				// pass in the target node, as well as the observer options
				//noinspection JSCheckFunctionSignatures
				observer.observe(target, {
					childList: true,
					attributes: false,
					characterData: false/*,
					 subtree: false,
					 attributeOldValue: false,
					 characterDataOldValue: false,
					 attributeFilter: []
					 */
				});
			});
		},
		
		/**
		 * Detect page initialization by App Script, then init Folders,
		 * Entry point
		 */
		waitInitialization: function () {
			// Find App script Workspace node
			this.setObserver(document.body, this.selector.workspace)
				// Find App script Resource list node
				.then(node => this.setObserver(node, this.selector.listFile))
				
				// Start adding folders
				.then(node => this.initFolders(node));
		},
		/**
		 * Folders CSS sheet
		 */
		insertCSS: function () {
			document.head.insertAdjacentHTML('beforeEnd',
`<style>
	.asc_FolderAdd_container {
		padding: 8px;
		text-align: center;
	}
	.asc_FolderAdd {
		padding: 5px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.asc_folder_container{
		padding-bottom: 10px;
	}
	.asc_Folder>div.item {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding-left: 10px!important;
	}
	.asc_folder_ChildList{
		transition: max-height 500ms;
		overflow: hidden;
		position: relative;
	}
	.asc_Folder.asc_folder_closed>.asc_folder_ChildList{
		max-height: 0;
	}
	.asc_Folder:not(.asc_folder_closed)>.asc_folder_ChildList{
		max-height: 1000px;
	}
	.asc_Folder.asc_folder_closed>.item::before {
		content: "+	";
		font-family: monospace;
	}
	.asc_Folder:not(.asc_folder_closed)>.item::before {
		content: "-	";
		font-family: monospace;
	}
	.asc_Folder:not(.asc_folder_closed){
		padding-bottom: 5px;
	}
	.asc_glass-panel{
		opacity: 1!important;
		background-color: rgba(153, 153, 153, 0.4);
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1050;
		display: flex;
		}
	.asc_Dialog{
		margin: auto;
	}
	.asc_popMenu{
		position: absolute;
		right: 0;
	}
	.asc_popMenu .gwt-MenuItem:hover {
		background-color: #efefef;
	}
</style>`
			);
		},
		
		/**
		 * Insert all initial folders if any
		 *
		 * @param {HTMLElement} node
		 */
		initFolders: function (node) {
			// Init folders
			// this.dom.folderContainer = document.createElement('div');
			// this.dom.folderContainer.classList.add('asc_folder_container');
			
			this.dom.gasProjectFiles = node;
			this.dom.gasFileList = node.querySelector(this.selector.listItem);
			
			// Drag & drop listeners
			// this.dom.gasProjectFiles.addEventListener('drop', this.onItemDrop.bind(this));
			// this.dom.gasProjectFiles.addEventListener('dragover', this.onItemDragOver.bind(this));
			
			this.rebuildFolderList = this.rebuildFolderList.bind(this);
			// this.onItemDrag = this.onItemDrag.bind(this);
			
			// Folder Create Button
			this.inserNewFolderButton(this.dom.gasProjectFiles);
			
			// add observer to detect list rebuild
			this.installListRebuildDetection(this.dom.gasFileList);
			
			// Load all folders
			this.restoreFolder();
		},
		
		/**
		 * Add the new folder button
		 * 
		 * @param {Node} projectFilesNode
		 */
		inserNewFolderButton: function(projectFilesNode){
			let domFolderCreateButton = document.createElement('div');
			domFolderCreateButton.classList.add('asc_FolderAdd_container');
			
			domFolderCreateButton.innerHTML = `<div class="asc_FolderAdd">New Folder</div>`;
			domFolderCreateButton.querySelector('.asc_FolderAdd')
				.addEventListener('click', () => {
					this.createDialog('Create Folder', 'Enter new folder name', '', this.addNewFolder);
				});
			
			// insert Menu button
			projectFilesNode.insertBefore(domFolderCreateButton, projectFilesNode.firstChild);
		},
		installListRebuildDetection: function(fileListNode){
			/**
			 * @param {MutationRecord[]} mutations
			 */
			let mutationCB = mutations => {
				console.log('re ??');
				
				mutations.forEach(mutation => {
					for (let item in mutation.removedNodes) {
						if (!mutation.removedNodes.hasOwnProperty(item)) continue;
						
						/**
						 * @type {HTMLElement}
						 */
						let node = mutation.removedNodes[item];
						
						// Make sure to rebuild ONLY if there are no parentNode
						if (node.classList.contains('asc_folder_container') && !node.parentNode) {
							console.log('re ?');
							
							this.rebuildFolderList(true);
							
							break;
						}
					}
				});
			};
			
			let observer = new MutationObserver(mutationCB);
			
			// pass in the target node, as well as the observer options
			observer.observe(fileListNode, {
				childList: true,
				attributes: false,
				characterData: false
			});
		},
		
		
		rebuildFolderList: function(){
			console.log('REBUILD list');
			
			this.restoreFolder();
			
			
			/*// Get existing children properties
			this.getGasItems()
				.forEach(item => {
					this.itemMap[item.label] && this.itemMap[item.label] !== item.node && this.itemMap[item.label].remove();
					
					this.itemMap[item.label] = item.node;
					
					// No drag&drop for the moment
					//item.node.setAttribute('draggable', 'true');
					//item.node.addEventListener('dragstart', this.onItemDrag);
				});*/
			
		},
		restoreFolder: function(){
			
			// RESET item map
			this.itemMap = {};
			
			// build map of children
			let staticFolders = new GasFolder('');
			
			// Get existing children properties
			this.getGasItems()
				.forEach(/**@param {GasFile} item */item => {
					this.itemMap[item.path] = item.node;
					
					let res = item.path.split('/');
					
					// build folders tree
					let prevName,
						prevFolder = staticFolders;
					
					res.forEach((name, i) => {
						
						// root level file
						if (res.length === 1){
							prevFolder.addChild(item);
							
							return;
						}
						
						// First folder
						if (!prevName) {
							prevName = name;
							
							return;
						}
						
						// Init folder && Move down a folder
						prevFolder = prevFolder.getChild(prevName) || prevFolder.addChild(new GasFolder(prevName));
						
						// Last name, it's the file name
						if (i === res.length - 1){
							prevFolder.addChild(item);
						}
						
						prevName = name;
					});
				});
			
			// Sort all folders at once
			staticFolders.sortAllChildren();
			staticFolders.assignDomChildren(true);
			
			staticFolders.setRoot(this.dom.gasFileList);
			
			this.dom.folderContainer = staticFolders;
			
			console.log(staticFolders);
			
			/*
			// build static folder list
			for (let folder in staticFolders) {
				
				/!**
				 * @type {HTMLElement}
				 *!/
				let domNewFolder = this.newFolder(folder);
				
				domNewFolder.classList.add('staticFolder');
				
				this.folderList.push({
					name: folder,
					dom: domNewFolder,
					domChildList: domNewFolder.querySelector('.asc_folder_ChildList'),
					childList: staticFolders[folder],
					position: this.folderList.length,
					staticFolder: true
				});
			}
			*/
			
		},
		
		/**
		 * Get all GAS files item with their name
		 * 
		 * @return {Array.<{label: string, node: Node}>}
		 */
		getGasItems: function () {
			let children = [];
			
			for (let i = 0, numChildren = this.dom.gasFileList.childNodes.length; i < numChildren; i++) {
				/**
				 * @type {HTMLElement}
				 */
				let node = this.dom.gasFileList.childNodes[i];
				
				// Skip if it's our folder container node
				if (node.classList.contains(this.CLASSNAME.folderContainer)) continue;
				
				// build a node map from item fileName
				let label = node.getAttribute('aria-label');
				
				// save item
				children.push(new GasFile(label, node))
			}
			
			// Sort by label A-Z
			children.sort((a, b) => a.name < b.name
				? -1
				: (a.name > b.name
					? 1
					: 0)
			);
			
			return children;
		},
		
		
		//#####################
		dragDropNode: undefined,
		onItemDrag: function (event) {
			this.dragDropNode = event.currentTarget;
		},
		onItemDrop: function (event) {
			let node = event.currentTarget;
			let label = this.dragDropNode.getAttribute('aria-label');
			
			// find the child in case it was in another folder
			if (this.dragDropNode.parentFolder) {
				let folder = this.dragDropNode.parentFolder.folder;
				
				for (let i = 0; i < folder.childList.length; i++) {
					if (folder.childList[i] === label) {
						folder.childList.splice(i, 1);
						
						break;
					}
				}
			}
			
			// back in the main item list
			if (node === this.dom.gasProjectFiles) {
				this.dom.gasFileList.appendChild(this.dragDropNode);
				
				this.dragDropNode.parentFolder = undefined;
			}
			else {
				// add item to folder list
				node.folder.childList.push(label);
				
				// add folder to item parentFolder
				this.dragDropNode.parentFolder = node;
				
				// move item node to folder
				node.folder.domChildList.appendChild(this.dragDropNode);
			}
			
			this.saveFolder();
			event.cancelBubble = true;
		},
		onItemDragOver: function (event) {
			event.preventDefault();
		},
		
		toggleFolder: function (event) {
			// Don't toggle when popMenu || inside child list
			for (let i = 0; i < event.path.length; i++) {
				if (event.path[i].isCreatingPopMenu || event.path[i].classList && event.path[i].classList.contains('asc_folder_ChildList')) {
					return;
				}
			}
			
			let childList = event.currentTarget.querySelector('.asc_folder_ChildList');
			
			if (!event.currentTarget.classList.contains('asc_folder_closed')) {
				childList.style.maxHeight = 'initial';
				let rect = childList.getBoundingClientRect();
				childList.style.maxHeight = `${rect.height}px`;
				childList.getBoundingClientRect();
				childList.style.maxHeight = '';
			}
			else {
				childList.style.maxHeight = 'initial';
				let rect = childList.getBoundingClientRect();
				childList.style.maxHeight = '';
				childList.getBoundingClientRect();
				childList.style.maxHeight = `${rect.height}px`;
			}
			event.currentTarget.classList.toggle('asc_folder_closed');
			
			this.saveFolder();
		},
		
		newFolder: function (name) {
			if (!name) return;
			
			let domNewFolder = document.createElement('div');
			domNewFolder.classList.add('asc_Folder');
			domNewFolder.innerHTML =
				`<div class="item">
	<div class="gwt-Label piece name">${name}</div>
	<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAECAYAAABCxiV9AAAAG0lEQVR42mOIjIz8jwszgABOCRjAKYGsAJkPAKT/IKHcRfUJAAAAAElFTkSuQmCC" width="7" height="4" class="gwt-Image dropdown" role="button" aria-label="More options" tabindex="0">
</div>
<div class="asc_folder_ChildList"></div>`;
			
			
			domNewFolder.querySelector('img.dropdown').addEventListener('click', function () {
				let parent = domNewFolder.querySelector('.item');
				
				parent.isCreatingPopMenu = true;
				Folders.popMenu(parent);
			});
			
			domNewFolder.addEventListener('drop', Folders.onItemDrop.bind(Folders));
			domNewFolder.addEventListener('dragover', Folders.onItemDragOver.bind(Folders));
			domNewFolder.addEventListener('click', Folders.toggleFolder.bind(Folders));
			
			
			/**
			 * @param {MutationRecord[]} mutations
			 * @param {MutationObserver} observer
			 */
			function observerCB(mutations, observer) {
				mutations.forEach(function (mutation) {
					let item,
						reCalculateHeight = 0;
					
					for (item in mutation.addedNodes) {
						if (!mutation.addedNodes.hasOwnProperty(item)) continue;
						
						reCalculateHeight += mutation.addedNodes[item].getBoundingClientRect().height;
					}
					for (item in mutation.removedNodes) {
						if (!mutation.removedNodes.hasOwnProperty(item)) continue;
						
						reCalculateHeight -= mutation.removedNodes[item].getBoundingClientRect().height;
					}
					
					if (reCalculateHeight) {
						let max = parseInt(mutation.target.style.maxHeight) + reCalculateHeight;
						mutation.target.style.maxHeight = `${max}px`;
					}
				});
			}
			
			let observer = new MutationObserver(observerCB);
			
			// pass in the target node, as well as the observer options
			//noinspection JSCheckFunctionSignatures
			observer.observe(domNewFolder.querySelector('.asc_folder_ChildList'), {
				childList: true,
				attributes: false,
				characterData: false/*,
				 subtree: false,
				 attributeOldValue: false,
				 characterDataOldValue: false,
				 attributeFilter: []
				 */
			});
			
			
			return domNewFolder;
		},
		addNewFolder: function (name) {
			let domNewFolder = Folders.newFolder(name);
			
			Folders.folderList.push({
				name: name,
				dom: domNewFolder,
				domChildList: domNewFolder.querySelector('.asc_folder_ChildList'),
				childList: [],
				position: Folders.folderList.length
			});
			
			Folders.rebuildFolderList();
		},
		
		_rebuildFolderList: function (state) {
			let self = Folders,
				node;
			
			// set existing children properties
			for (let i = 0; i < self.dom.gasFileList.childNodes.length; i++) {
				/**
				 * @type {HTMLElement}
				 */
				node = self.dom.gasFileList.childNodes[i];
				if (node.classList.contains('asc_folder_container')) continue;
				
				let label = node.getAttribute('aria-label');
				if (self.itemMap[label] && self.itemMap[label] !== node) {
					self.itemMap[label].remove();
				}
				self.itemMap[label] = node;
				
				node.setAttribute('draggable', 'true');
				node.addEventListener('dragstart', Folders.onItemDrag.bind(Folders));
			}
			
			self.folderList.sort(function (a, b) {
				return a.position - b.position;
			});
			
			// Make sure the folders are first in the DOM
			self.dom.gasFileList.insertBefore(self.dom.folderContainer, self.dom.gasFileList.firstChild);
			
			for (let i = self.folderList.length - 1; i >= 0; i--) {
				let node = self.folderList[i].dom;
				
				if (self.dom.folderContainer.firstChild) {
					self.dom.folderContainer.insertBefore(node, self.dom.folderContainer.firstChild);
				}
				else {
					self.dom.folderContainer.appendChild(node);
				}
				
				node.folder = self.folderList[i];
				
				for (let j = 0; j < node.folder.childList.length; j++) {
					let item = self.itemMap[node.folder.childList[j]];
					
					if (!item || (item.parentNode !== self.dom.gasFileList && state)) {
						node.folder.childList.splice(j, 1);
						item.remove();
						
						j--;
						continue;
					}
					
					item.parentFolder = node;
					node.folder.domChildList.appendChild(item);
					
					if (node.folder.staticFolder) {
						let domLabel = item.querySelector('div.gwt-Label[title]');
						
						domLabel && (domLabel.innerHTML = node.folder.childList[j].replace(/^[^\/]+\//, ''));
					}
				}
			}
			
			self.saveFolder();
		},
		
		saveFolder: function () {
			let save = [];
			
			for (let i = 0; i < Folders.folderList.length; i++) {
				
				if (Folders.folderList[i].dom.classList.contains('staticFolder')) continue;
				
				// establish child item list
				let child = [];
				for (let j = 0; j < Folders.folderList[i].childList.length; j++) {
					child.push(Folders.folderList[i].childList[j]);
				}
				
				save.push({
					"name": Folders.folderList[i].name,
					"files": child,
					"state": Folders.folderList[i].dom.classList.contains('asc_folder_closed')
				});
			}
			
			localStorage.setItem(`appScriptColor-Folders-${Folders.key}`, JSON.stringify(save));
		},
		_restoreFolder: function () {
			let foldersJSON = localStorage[`appScriptColor-Folders-${asc.folders.key}`] || '[]',
				children = {};
			
			// Nothing to restore
			if (!foldersJSON) return;
			
			/**
			 * @typed {Array.<{
			 *   name: string,
			 *   files: Array.<string>,
			 *   state: Boolean
			 * }>}
			 */
			let folders = JSON.parse(foldersJSON);
			
			// build map of children
			let staticFolders = {};
			
			for (let i = 0; i < this.dom.gasFileList.childNodes.length; i++) {
				if (this.dom.gasFileList.childNodes[i].classList.contains('asc_folder_container')) continue;
				
				let fileName = this.dom.gasFileList.childNodes[i].getAttribute('aria-label');
				children[fileName] = this.dom.gasFileList.childNodes[i];
				
				let res = fileName.split('/');
				// There are static folders
				if (res.length > 1) {
					staticFolders[res[0]] && staticFolders[res[0]].push(fileName) || (staticFolders[res[0]] = [fileName]);
				}
			}
			
			// build static folder list
			for (let folder in staticFolders) {
				
				/**
				 * @type {HTMLElement}
				 */
				let domNewFolder = this.newFolder(folder);
				
				domNewFolder.classList.add('staticFolder');
				
				this.folderList.push({
					name: folder,
					dom: domNewFolder,
					domChildList: domNewFolder.querySelector('.asc_folder_ChildList'),
					childList: staticFolders[folder],
					position: this.folderList.length,
					staticFolder: true
				});
			}
			
			
			for (let i = 0; i < folders.length; i++) {
				
				/**
				 * @typed {{
				 *   name: string,
				 *   files: Array.<string>,
				 *   state: Boolean
				 * }}
				 */
				let readFolder = folders[i];
				// Load old names TODO: remove in January 2018
				if (readFolder['n']) readFolder['name'] = readFolder['n'];
				if (readFolder['w']) readFolder['files'] = readFolder['w'];
				if (readFolder['c']) readFolder['files'] = readFolder['c'];
				if (readFolder['L']) readFolder['state'] = readFolder['L'];
				if (readFolder['s']) readFolder['state'] = readFolder['s'];
				
				
				/**
				 * @type {HTMLElement}
				 */
				let domNewFolder = this.newFolder(readFolder['name']);
				
				// Set folder open state
				let domFolderChildList = domNewFolder.querySelector('.asc_folder_ChildList');
				domNewFolder.classList.toggle('asc_folder_closed', readFolder['state']);
				if (!readFolder['state']) domFolderChildList.style.maxHeight = '0px';
				
				let childList = [];
				
				// rebuild whole child list
				for (let j = 0; j < readFolder['files'].length; j++) {
					let child = children[readFolder['files'][j]];
					if (!child) continue;
					
					childList.push(readFolder['files'][j]);
				}
				
				this.folderList.push({
					name: readFolder['name'],
					dom: domNewFolder,
					domChildList: domFolderChildList,
					childList: childList,
					position: this.folderList.length
				});
				
			}
			
			// rebuild all list !
			this.rebuildFolderList(true);
		},
		//####
		
		createDialog: function (title, message, defaultValue, callBack_OK) {
			let DOMdialog = document.createElement('div');
			
			defaultValue = defaultValue || '';
			
			DOMdialog.classList.add('glass_panel', 'asc_glass-panel');
			DOMdialog.innerHTML =
				`<div class="asc_Dialog maestro-dialog">
	<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAA6UlEQVR42oWRywqCUBCGzwNFm8BF0AWCNj2I+4M3vG/EoGfoPaS1tTJtIRkUFK16hyD7J05iKnTgZ5yZby6ewxiOrusJJLOOYxiGj1zEamAJHZEY1EFN02aIX6EXcQTLCN6pAPZgWZZEoG3bc/gn0SivJuNjDJ1VVS0dx0nDMFzDFuQjvkeR9LMbEhN02wEq0b10XZfspgV+j+/7K4I55x/Y8zzeCWLcAp1SgkkEm6YZ46enLRDBm9g5DoJgiZUysXNeFYh7fIjb2GJ0n+IoGsHPxG1ciKOukQgkiqL0GhOHUAE9mw/z9wXfJTmqxGHESosAAAAASUVORK5CYII=" width="11" height="11" class="gwt-Image dialog-close-image" role="button" tabindex="0" aria-label="Close">
	<div class="Caption">${title}</div>
	<div class="rename-box">
		<div class="asc_Dialog_input panel">
			<div class="gwt-Label rename-label">${message}</div>
			<input class="gwt-TextBox rename-input" value="${defaultValue}"/>
		</div>
	</div>
	<div class="buttons">
		<button class="gwt-Button asc_ok">OK</button>
		<button class="gwt-Button asc_cancel">Cancel</button>
	</div>
</div>`;
			
			function onClose() {
				DOMdialog.remove();
			}
			
			let DOM_OK = DOMdialog.querySelector('.asc_ok'),
				DOM_Cancel = DOMdialog.querySelector('.asc_cancel');
			
			DOMdialog.querySelector('.rename-input').addEventListener('keydown', function (event) {
				// Should do nothing if the key event was already consumed.
				if (event.defaultPrevented) return;
				
				
				if (event.code === 'Enter') {
					DOM_OK.click();
				}
				else if (event.code === 'Escape') {
					DOM_Cancel.click();
				}
			});
			
			DOM_OK.addEventListener('click', function () {
				callBack_OK(DOMdialog.querySelector('.rename-input').value);
				onClose();
			});
			DOM_Cancel.addEventListener('click', onClose);
			DOMdialog.querySelector('.dialog-close-image').addEventListener('click', onClose);
			
			document.body.appendChild(DOMdialog);
			DOMdialog.querySelector('.rename-input').focus();
		},
		popMenu: function (parent) {
			let domPopMenu = document.createElement('div');
			domPopMenu.classList.add('resource-context-menu', 'asc_popMenu');
			
			domPopMenu.innerHTML =
				`<div class="gwt-MenuItem asc_menu_Rename">Rename</div>
<div class="gwt-MenuItem asc_menu_Delete">Delete</div>`;
			
			// Callbacks
			function onClose() {
				if (parent.isCreatingPopMenu) {
					parent.isCreatingPopMenu = false;
					return;
				}
				domPopMenu.remove();
				document.removeEventListener('click', onClose);
			}
			
			function onClick(event) {
				event.cancelBubble = true;
			}
			
			function menuRename() {
				Folders.createDialog('Rename Folder', 'Enter new folder name', parent.parentNode.folder.name, function (name) {
					if (!name) return;
					
					parent.parentNode.folder.name = name;
					parent.querySelector('.gwt-Label').innerHTML = name;
					
					Folders.saveFolder();
				});
				
				onClose();
			}
			
			function menuDelete() {
				for (let i = 0; i < Folders.folderList.length; i++) {
					if (Folders.folderList[i] !== parent.parentNode.folder) continue;
					
					Folders.folderList.splice(i, 1);
					
					// move all child node back
					let node = parent.parentNode.querySelector('.asc_folder_ChildList');
					if (node) {
						for (let j = node.childNodes.length - 1; j > -1; j--) {
							Folders.dom.gasFileList.appendChild(node.childNodes[j]);
						}
					}
					
					parent.parentNode.remove();
					Folders.rebuildFolderList();
					
					break;
				}
				
				onClose();
			}
			
			// Add listeners
			document.addEventListener('click', onClose);
			domPopMenu.addEventListener('click', onClick);
			domPopMenu.querySelector('.asc_menu_Rename').addEventListener('click', menuRename);
			domPopMenu.querySelector('.asc_menu_Delete').addEventListener('click', menuDelete);
			
			parent.appendChild(domPopMenu);
		}
	};
	
	asc.folders = Folders;
	
	
	//<editor-fold desc="# Initialization">
	
	window['asc'] = asc;
	
	asc.initColors();
	asc.insertMenuButton();
	
	Folders.insertCSS();
	Folders.waitInitialization();
	
	//</editor-fold>
	
})();
