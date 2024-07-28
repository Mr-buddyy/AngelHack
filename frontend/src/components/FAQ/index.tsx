function FAQ() {
    return (
        <div id="faq" class="pb-[120px] px-[100px]">
            <h1 class="card-title mb-4 title-section">Frequently asked questions</h1>
            <div class="join join-vertical w-full">
                <div class="collapse collapse-arrow join-item border-b">
                    <input type="checkbox" id="item-1" />
                    <label for="item-1" class="collapse-title text-xl font-medium">
                        What is LaporSkuy?
                    </label>
                    <div class="collapse-content">
                        <p>LaporSkuy is a user-friendly website that allows user to report infrastructure issues</p>
                    </div>
                </div>
                <div class="collapse collapse-arrow join-item border-b">
                    <input type="checkbox" id="item-1" />
                    <label for="item-1" class="collapse-title text-xl font-medium">
                        What is the main feature of LaporSkuy?
                    </label>
                    <div class="collapse-content">
                        <p>Easy to capture and upload infrastructure issue.</p>
                    </div>
                </div>
                <div class="collapse collapse-arrow join-item  border-b">
                    <input type="checkbox" id="item-1" />
                    <label for="item-1" class="collapse-title text-xl font-medium">
                        Where the report will be sent?
                    </label>
                    <div class="collapse-content">
                        <p>Your report will be sent to local authorities email</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
