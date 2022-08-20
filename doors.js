

// LOGGER CLASS FOR BETTER HANDLING OF INFORMATION IN AND OUT OF STANDARD STREAMS

const LOG = {

    SUCCESS:    Symbol("success"),
    INFO:       Symbol("info"),
    RESPONSE:   Symbol("response"),
    WARNING:    Symbol("warning"),
    CRITICAL:   Symbol("critical")
}

function execute(handle){

    switch(handle.level){

        case LOG.SUCCESS:
            console.log('\033[32m' + `[${handle.address}][${handle.label}] ${handle.information}` + '\033[0m');
            break;

        case LOG.INFO:
            console.info('\033[37m' + `[${handle.address}][${handle.label}] ${handle.information}` + '\033[0m');
            break;

        case LOG.RESPONSE:
            console.log('\033[36m' + `[${handle.address}][${handle.label}] ${handle.information}` + '\033[0m');
            break;

        case LOG.WARNING:
            console.log('\033[33m' + `[${handle.address}][${handle.label}] ${handle.information}` + '\033[0m');
            break;

        case LOG.CRITICAL:
            console.error('\033[31m' + `[${handle.address}][${handle.label}] ${handle.information}` + '\033[0m');
            break;
    }
}

class HANDLE {

    constructor(label, level, message){

        this.label = label;
        this.level = level;
        this.information = message;
        this.rawTime = new Date();
        this.occurance = {

            year:       this.rawTime.getFullYear(),
            month:      this.rawTime.getMonth(),
            day:        this.rawTime.getDate(),
            hour:       this.rawTime.getHours(),
            minutes:    this.rawTime.getMinutes(),
            seconds:    this.rawTime.getSeconds(),
            mSeconds:   this.rawTime.getMilliseconds()
        }

        this.address = process.mainModule.filename;
    }
}

class Logger {

    constructor(set = process.mainModule.filename){

        this.instanceAddress = set
        this.handles = [];
    }

    SUCCESS(label, message){

        var handle = new HANDLE(label, LOG.SUCCESS, message);
        this.handles.push(handle);
        execute(handle);
    }

    INFO(label, message){

        var handle = new HANDLE(label, LOG.INFO, message);
        this.handles.push(handle);
        execute(handle);
    }

    RESPONSE(label, message){

        var handle = new HANDLE(label, LOG.RESPONSE, message);
        this.handles.push(handle);
        execute(handle);
    }

    WARNING(label, message){

        var handle = new HANDLE(label, LOG.WARNING, message);
        this.handles.push(handle);
        execute(handle);
    }

    CRITICAL(label, message){

        var handle = new HANDLE(label, LOG.CRITICAL, message);
        this.handles.push(handle);
        execute(handle);
    }
}

module.exports = Logger;
