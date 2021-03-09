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
        if (file.imageSrc.length) {
            return `<img src="${file.imageSrc}" class="file-preview__image" alt="${file.name}"/>`
        }

        return `
            <div class="file-preview__no-image">
                <span class="file-preview__no-image-text">No image</span>
            </div>
        `
    }

    _getFileHTML(file) {
        return `
            <div class="file-preview">
                <button type="button" class="button file-preview__remove" data-name="${file.name}">
                    <svg class="file-preview__remove-icon" xmlns="http://www.w3.org/2000/svg" width="348.333" height="348.334" viewBox="0 0 348.333 348.334">
                        <path d="M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z"/>
                    </svg>
                </button>

                <div class="file-preview__square">
                    ${this._getImageHTML(file)}
                </div>

                <p class="file-preview__info">
                    <span class="file-preview__name">${file.name}</span>
                    <span class="file-preview__size">${bytesToSize(file.size)}</span>
                </p>
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
