function FAQ() {
    return (
        <div id="faq" class="p-6">
            <h1 class="card-title mb-4">Frequently asked questions</h1>
            <div class="join join-vertical w-full">
                <div class="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" checked="checked" />
                    <div class="collapse-title text-xl font-medium">What is LaporSkuy?</div>
                    <div class="collapse-content">
                        <p>LaporSkuy is a user-friendly website that allows user to report infrastructure issues</p>
                    </div>
                </div>
                <div class="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div class="collapse-title text-xl font-medium">What is the main feature of LaporSkuy?</div>
                    <div class="collapse-content">
                        <p>Easy to capture and upload infrastructure issue.</p>
                    </div>
                </div>
                <div class="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div class="collapse-title text-xl font-medium">Where the report will be sent?</div>
                    <div class="collapse-content">
                        <p>Your report will be sent to local authorities email</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
