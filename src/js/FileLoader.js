import merge from 'lodash.merge'
import { getImageFromFile, bytesToSize } from './helpers'

const defaults = {
    selectors: {
        fileInput: '[data-file-input]',
        openButton: '[data-open-button]',
        preview: '[data-preview]',
    },
    classes: {
        showFiles: '_show-files',
    },
    multiple: false,
    accept: [],
}

export default class FileLoader {
    constructor(element, options = {}) {
        if (!element) {
            throw new Error(`Need element. Element equals ${el}`)
        }

        this.$el = element
        this.options = merge({}, defaults, options)
        this._cache()
        this._bindEvents()
        this._updateAttributes()
    }

    _cache() {
        const { selectors } = this.options

        this.$fileInput = this.$el.querySelector(selectors.fileInput)
        this.$openButton = this.$el.querySelector(selectors.openButton)
        this.$preview = this.$el.querySelector(selectors.preview)
    }

    _bindEvents() {
        this.$openButton.addEventListener('click', () => this.open())
        this.$fileInput.addEventListener('change', this._onChange.bind(this))
    }

    _updateAttributes() {
        const { multiple, accept } = this.options

        if (multiple) {
            this.$fileInput.setAttribute('multiple', true)
        }

        if (accept.length) {
            this.$fileInput.setAttribute('accept', accept.join(','))
        }
    }

    _onChange(ev) {
        const files = [...ev.currentTarget.files]

        if (!files.length) {
            this.render([])
            return
        }

        const promises = files.map(file => {
            const { name, size } = file

            return getImageFromFile(file)
                .then(imageSrc => ({ name, size, imageSrc }))
        })

        Promise.all(promises).then(files => {
            this.render(files)
        })
    }

    _getImageHTML(file) {
        if (file.imageSrc) {
            return `<img src="${file.imageSrc}" class="file-preview__image" alt="${file.name}"/>`
        }

        return `
            <div class="file-preview__doc">
                <span class="file-preview__doc-text">Doc</span>
            </div>
        `
    }

    _getFileHTML(file) {
        return `
            <div class="file-preview">
                <div class="file-preview__square">
                    <div class="file-preview__remove" data-name="${file.name}">&times;</div>
                    ${this._getImageHTML(file)}
                    <div class="file-preview__info">
                        <span>${file.name}</span>
                        ${bytesToSize(file.size)}
                    </div>
                </div>
            </div>
        `
    }

    open() {
        this.$fileInput.click()
    }

    render(files) {
        const hasFiles = !!files.length

        this.$preview.innerHTML = ''
        this.$el.classList.toggle(this.options.classes.showFiles, hasFiles)

        if (!hasFiles) {
            return
        }

        this.$preview.innerHTML = files.reduce((html, file) => {
            return html + this._getFileHTML(file)
        }, '')
    }
}
