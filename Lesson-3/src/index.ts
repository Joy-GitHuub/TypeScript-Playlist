console.log(`Hello I am index.ts`);

const form = document.querySelector('form') as HTMLFormElement;

const input = document.querySelector('input')!;


form.addEventListener("click", function(event:Event):void {
    event.preventDefault();

    const data: {userName: string,} =
    {
        userName: input.value,
    };
    console.log(data);
});