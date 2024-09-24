import { App } from "./Providers/App";
import cluster from "cluster";
import os from 'os';

const app = new App();


if (cluster.isPrimary) {

    const numOfCpus = os.cpus().length;

    for (let i = 0; i < numOfCpus; i++) {
        cluster.fork();
    };

    cluster.on("exit", (worker, code, signal) => {
        console.error(`Worker ${worker.process.pid} exited with code ${code}`);
        cluster.fork(); // Automatically restart the worker

    })

} else {
    app.initServer();
}
