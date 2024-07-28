function FAQ() {
    return (
        <div id="faq" class="pb-[120px] px-[100px]">
            <h1 class="card-title mb-4 title-section">Pertanyaan yang Sering Ditanyakan (FAQ)</h1>
            <div class="join join-vertical w-full">
                <div class="collapse collapse-arrow join-item border-b">
                    <input type="checkbox" id="item-1" />
                    <label for="item-1" class="collapse-title text-xl font-medium">
                        Apa itu LaporSkuy?
                    </label>
                    <div class="collapse-content">
                        <p>LaporSkuy merupakan web yang memudahkan pengguna untuk melaporkan kerusakan infrastruktur kota.</p>
                    </div>
                </div>
                <div class="collapse collapse-arrow join-item border-b">
                    <input type="checkbox" id="item-1" />
                    <label for="item-1" class="collapse-title text-xl font-medium">
                        Apa fitur utama dari LaporSkuy?
                    </label>
                    <div class="collapse-content">
                        <p>Fitur utama LaporSkuy adalah mudah dalam menangkap dan mengunggah laporan kerusakan infrastruktur.</p>
                    </div>
                </div>
                <div class="collapse collapse-arrow join-item  border-b">
                    <input type="checkbox" id="item-1" />
                    <label for="item-1" class="collapse-title text-xl font-medium">
                        Kemana laporan akan dikirimkan?
                    </label>
                    <div class="collapse-content">
                        <p>Laporan Anda akan dikirimkan ke email pemerintah daerah setempat.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
