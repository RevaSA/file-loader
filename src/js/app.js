import { storage } from './firebase'
import FileLoader from './FileLoader'
import { getPercentage } from './helpers';

new FileLoader(document.querySelector('[data-file-loader]'), {
    multiple: true,
    accept: ['.png', '.jpg', '.jpeg', '.gif', '.pdf', '.doc'],
    uploadHandler(files, fileLoader) {
       files.forEach((file, index) => {
            const ref = storage.ref(`images/${file.name}`)
            const task = ref.put(file)

            task.on('state_changed',
                ({ bytesTransferred, totalBytes }) => {
                    const percent = getPercentage(bytesTransferred, totalBytes)

                    fileLoader.updatePercentage(index, percent)
                },
                error => {
                    console.log('%cerror', 'font-weight:900; color:firebrick;', error);
                },
                () => {
                    console.log('%ccomplete', 'font-weight:900; color:firebrick;');
                    task.snapshot.ref.getDownloadURL().then(url => {
                        console.log('%curl', 'font-weight:900; color:firebrick;', url);
                    })
                })
        })
    },
})
