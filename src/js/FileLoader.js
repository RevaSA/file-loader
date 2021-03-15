import merge from 'lodash.merge'
import { getImageFromFile, bytesToSize, noop } from './helpers'

const defaults = {
    selectors: {
        fileInput: '[data-file-input]',
        openButton: '[data-open-button]',
        uploadButton: '[data-upload-button]',
        previewContainer: '[data-preview-container]',
        filePreview: '[data-file-preview]',
        removeButton: '[data-remove-button]',
        progressBarPercent: '[data-progress-bar-percent]',
    },
    classes: {
        showFiles: '_show-files',
        renderedAllPreviews: '_rendered-all-previews',
        uploading: '_uploading',
        removing: '_removing',
    },
    multiple: false,
    accept: [],
    files: [],
    uploadHandler: noop,
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
        this.$uploadButton = this.$el.querySelector(selectors.uploadButton)
        this.$preview = this.$el.querySelector(selectors.previewContainer)
    }

    _bindEvents() {
        this.$fileInput.addEventListener('change', this._onChange.bind(this))
        this.$openButton.addEventListener('click', () => this.open())
        this.$uploadButton.addEventListener('click', this._onClickUpload.bind(this))
        this.$preview.addEventListener('click', this._onClickRemove.bind(this))
        this.$preview.addEventListener('transitionend', this._onTransitionEnd.bind(this))
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

        if (files.length) {
            this.render(files)
        }
    }

    _onClickRemove(ev) {
        const { files, selectors, classes } = this.options
        const $removeBtn = ev.target.closest(selectors.removeButton)

        if (!$removeBtn) {
            return;
        }

        const $filePreview = $removeBtn.closest(selectors.filePreview)
        const position = Number($filePreview.dataset.filePosition)
        const index = files.findIndex(file => file.index === position)

        files.splice(index, 1)
        $filePreview.classList.add(classes.removing)
    }

    _onTransitionEnd(ev) {
        const $target = ev.target

        if ($target.matches(this.options.selectors.filePreview)) {
            this._removeFilePreviewHandler($target)
        }
    }

    _onClickUpload() {
        const { files, classes, uploadHandler } = this.options

        this.$el.classList.add(classes.uploading)
        uploadHandler(files, this)
    }

    _renderedAllPreviewsHandler() {
        this.$progressBarPercents = this.$preview.querySelectorAll(this.options.selectors.progressBarPercent)
        this.$el.classList.add(this.options.classes.renderedAllPreviews)
    }

    _removeFilePreviewHandler($filePreview) {
        $filePreview.remove()

        if (!this.$preview.children.length) {
            this.$el.classList.remove(this.options.classes.showFiles)
        }
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
            <div class="file-preview" data-file-preview data-file-position="${file.index}">
                <button type="button" class="button file-preview__remove" data-remove-button>
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
                
                <div class="progress-bar file-preview__progress-bar">
                    <span class="progress-bar__bar" data-progress-bar-percent></span>
                </div>
            </div>
        `
    }

    render(files) {
        let renderedCount = 0

        this.options.files = files
        this.$preview.innerHTML = ''
        this.$el.classList.remove(this.options.classes.renderedAllPreviews)
        this.$el.classList.add(this.options.classes.showFiles)

        files.forEach((file, index) => {
            const { name, size } = file

            getImageFromFile(file).then(imageSrc => {
                this.appendPreviewFile({ index, name, size, imageSrc })
                renderedCount += 1

                if (renderedCount === files.length) {
                    this._renderedAllPreviewsHandler()
                }
            })
        })
    }

    open() {
        this.$fileInput.click()
    }

    appendPreviewFile(file) {
        this.$preview.insertAdjacentHTML('beforeend', this._getFileHTML(file))
    }

    updatePercentage(index, percent) {
        const $progressBar = this.$progressBarPercents[index]
        const value = `${percent}%`

        if ($progressBar) {
            $progressBar.textContent = value
            $progressBar.style.width = value
        }
    }
}
