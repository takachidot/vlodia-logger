# @vlodia/logger

A simple Node.js logger class for printing colorful console logs using the `chalk` module. It supports various log levels with color-coded messages.

## Installation

To install the module using npm, run the following command in your terminal:

```bash
npm install @vlodia/logger
yarn add @vlodia/logger
```
## Usage
```javascript
const { Logger } = require("@vlodia/logger");

// Create an instance of Logger
const logger = new Logger("MyApp");

// Print log messages
logger.log("This is a log message.");
logger.info("This is an info message.");
logger.warn("This is a warning message.");
logger.error("This is an error message.");
logger.success("This is a success message.");
```
## Log Levels
* log(message: string): General log messages.
* info(message: string): Information messages.
* warn(message: string): Warning messages.
* error(message: string): Error messages.
* success(message: string): Success messages.
* Log messages are printed to the console with timestamp and a custom prefix in colorful format.

## Example
```javascript
const express = require("express");
const app = express();
const { Logger } = require('@vlodia/logger');
const logger = new Logger('APP:')
app.get("/", (req, res) => res.send("Express"));

app.listen(3000, () => {
    logger.success("Connected succesfully")
});

module.exports = app;
```
* It will look like this in the terminal
[Terminal](https://cdn.discordapp.com/attachments/1254740352515178557/1256532463031685150/image.png?ex=66811c8c&is=667fcb0c&hm=19cda13e119c2e30f39781d58baedfc3c1be4b1999a1aa740c0437891feb2d18&)

## Contributing
* This module is open source. You can contribute by adding new features or fixing bugs and sending a pull request to the GitHub repository.

## License
* This project is licensed under the Apache-v2.0 License. For details, see the LICENSE file.
