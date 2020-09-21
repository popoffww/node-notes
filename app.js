const yargs = require('yargs');
const notes = require('./notes');

yargs.command({
    command: 'add',
    describe: 'Добавить новую заметку',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
            describe: 'Название заметки'
        },
        text: {
            type: 'string',
            demandOption: true,
            describe: 'Текст заметки'
        }
    },
    handler({title, text}) {
        notes.addNote(title, text)
    }
})

yargs.command({
    command: 'list',
    describe: 'Показать список заметок',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Показать содержание заметки',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
            describe: 'Чтение заметки'
        }
    },
    handler({title}) {
        notes.readNote(title)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Удалить заметку',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
            describe: 'Удаление заметки'
        }
    },
    handler({title}) {
        notes.removeNote(title)
    }
})

yargs.parse()