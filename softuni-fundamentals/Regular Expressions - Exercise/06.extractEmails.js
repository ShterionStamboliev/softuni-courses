function extractEmails(input) {
    let pattern = /(^|(?<=\s))(?<mail>([A-Za-z\d]+)([\.\-_]?)([A-Za-z\d]+)@([A-Za-z]+([\.\-][A-Za-z]+)+))/g
    let match = pattern.exec(input);
    let box = [];

    while(match) {
        let result = match.groups.mail;
        box.push(result);
        match = pattern.exec(input);
    }
    console.log(box.join('\n'));
}
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');