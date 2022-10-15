class MyCircularDeque {
    capcity: number;

    head: number = 0;
    tail: number = 0;
    queue: Array<number> = [];
    constructor(k: number) {
        this.capcity = k + 1;
    }

    insertFront(value: number): boolean {
        if(this.isFull()) return false;

        this.head = (this.head - 1 + this.capcity) % this.capcity;
        this.queue[ this.head ] = value;
        return true;
    }

    insertLast(value: number): boolean {
        if(this.isFull()) return false;

        this.queue[this.tail] = value
        this.tail = (this.tail + 1) % this.capcity;
        return true;
    }

    deleteFront(): boolean {
        if(this.isEmpty()) return false;
        this.head = (this.head + 1) % this.capcity;
        return true;
    }

    deleteLast(): boolean {
        if(this.isEmpty()) return false;
        this.tail = (this.tail - 1 + this.capcity) % this.capcity;
        return true;
    }
    getFront(): number {
        if(this.isEmpty()) return -1;
        return this.queue[this.head];
    }

    getRear(): number {
         if(this.isEmpty()) return -1;
         return this.queue[(this.tail - 1 + this.capcity) % this.capcity]
    }

    isEmpty(): boolean {
        return this.head === this.tail
    }

    isFull(): boolean {
        return this.head === (this.tail + 1) % this.capcity;
    }
}

