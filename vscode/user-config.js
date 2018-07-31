const VSCODE_USER_CONFIG = {
	// Убрать автоматическое определение отступов
	// и замену табов на пробелы
    "editor.detectIndentation": false,
	"editor.insertSpaces": false,

	// Размер шрифта, линейка, отображение 
	// символов табуляции и пробелов
	"editor.fontSize": 12.5,
	"editor.rulers": [100],
	"editor.renderWhitespace": "all",

	// Увеличение масштаба интерфейса
	"window.zoomLevel": 0.5,

	// Выбор цветовой темы для редактора
	"workbench.colorTheme": "Hopscotch",

	// Выбор темы для иконок
	"workbench.iconTheme": "vscode-icons",

	// Кастомизация шрифта и лигатур
	"editor.fontFamily": "Fira Code, Menlo, Monaco, 'Courier New', monospace",
	"editor.fontLigatures": true,

	// Поддержка эммета внутри postcss
	"emmet.includeLanguages": {
		"postcss": "css"
	},
	"emmet.syntaxProfiles": {
		"postcss": "css"
	},

	// Конфигурация GitLens
	"gitlens.advanced.messages": {
		"suppressShowKeyBindingsNotice": true
	},

	// Конфигурация включающая линтер
    "eslint.options": {
        "extensions": [".html", ".js", ".vue", ".jsx", ".ts"]
    },
    "eslint.validate": [
        {
            "language": "html",
            "autoFix": true
        },
        {
            "language": "vue",
            "autoFix": true
        },
        {
            "language": "javascript",
            "autoFix": true
        },
        {
            "language": "javascriptreact",
            "autoFix": true
        },
        {
            "language": "typescript",
            "autoFix": true
        }
	],
}