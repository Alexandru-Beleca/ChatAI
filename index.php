<?php 
include 'assets/header.php';
include 'assets/nav.php';
?>
        <main class="position-relative col-12 col-md-9 col-xl-10 d-flex flex-column justify-content-between" style="background-color: #343541;">  
        <div id="main" class="col-12" > 
        </div>
            <section id="chatGpt" class="col-11 col-lg-10 col-xl-8 col-xxl-6 mx-auto mt-sm-5 pt-sm-5">

                <h1 class="text-start text-sm-center m-5 fw-bold">ChatGPT</h1>
                <div class="d-flex justify-content-evenly text-center fs-7">
                    <div class="d-flex flex-column col-4 mb-5 ">  

                        <i class="bi bi-sun fs-4"></i>
                        <h2 class="fs-5 my-3">Examples</h2>
                        <div class="d-inline m-1 m-md-2 rounded-3 px-1 px-sm-2 py-1 py-sm-3" style="background-color: #3e3f4b;">
                            "Explain quantum computing in simple terms" <i class="bi bi-arrow-right"></i>
                        </div>
                        <div class="d-inline m-1 m-md-2 rounded-3 px-1 px-sm-2 py-1 py-sm-3" style="background-color: #3e3f4b;">
                            "Got any creative ideas for a 10 year old's birthday" <i class="bi bi-arrow-right"></i> 
                        </div>
                        <div class="d-inline m-1 m-md-2 rounded-3 px-1 px-sm-2 py-1 py-sm-3" style="background-color: #3e3f4b;">
                            "How do I make an HTTP request in Javascript?" <i class="bi bi-arrow-right"></i>
                        </div>
                    </div>
                    <div class="d-flex flex-column col-4 mb-5">  
                        <i class="bi bi-lightning-charge fs-4"></i>
                        <h2 class="fs-5 my-3">Capabilities</h2>
                        <div class="d-inline  m-1 m-md-2 rounded-3 px-1 px-sm-2 py-1 py-sm-3" style="background-color: #3e3f4b;">
                            Remembers what user said earlier in the conversation
                        </div>
                        <div class="d-inline  m-1 m-md-2 rounded-3 px-1 px-sm-2 py-1 py-sm-3" style="background-color: #3e3f4b;">
                            Allows user to provide follow-up corrections
                        </div>
                        <div class="d-inline  m-1 m-md-2 rounded-3 px-1 px-sm-2  py-1 py-sm-3" style="background-color: #3e3f4b;">
                            Trained to decline inappropriate requests                        
                        </div>
                    </div>
                    <div class="d-flex flex-column col-4 mb-5">
                        <i class="bi bi-exclamation-triangle fs-4"></i> 
                        <h2 class="fs-5 my-3">Limitations</h2>
                        <div class="d-inline m-1 m-md-2 rounded-3 px-1 px-sm-2 py-1 py-sm-3" style="background-color: #3e3f4b;">
                            May occasionally generate incorrect information
                        </div>
                        <div class="d-inline m-1 m-md-2 rounded-3 px-1 px-sm-2 py-1 py-sm-3" style="background-color: #3e3f4b;">
                            May occasionally produce harmful instructions or biased content
                        </div>
                        <div class="d-inline m-1 m-md-2 rounded-3 px-1 px-sm-2 py-1 py-sm-3" style="background-color: #3e3f4b;">
                            Limited knowledge of world and events after 2021
                        </div>
                    </div>
                </div>
            </section>
            <?php include 'assets/input.php';?>
        </main>
<?php 
include 'assets/modal.php';
include 'assets/footer.php';
?>
