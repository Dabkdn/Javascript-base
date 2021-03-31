# Javascript-base

###explain how javascript works in runtime environment:
####eventloop, macrotaskqueue and microtaskqueue: https://javascript.info/event-loop
just remember that microtask queue have more priorities than macrotask queue
and the promise is thrown to microtask queue. This is the reason why eventloop get the promise from queue and throw it to call stack before the setimeout - in the macrotask queue