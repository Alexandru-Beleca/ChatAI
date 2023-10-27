<body class="position-relative d-flex bg-dark text-white" style="min-width: 360px;">
    <nav id="navbar" class="navbar navbar-expand-md vh-100 col-md-3 col-xl-2">
        <div class="offcanvas offcanvas-bg-color offcanvas-start text-bg-dark w-75" data-bs-backdrop="static" tabindex="-1">
            <div class="offcanvas-header position-absolute end-0 d-md-none">
                <button type="button" class="position-absolute rounded-0 btn-close btn-close-white p-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body d-flex flex-column justify-content-between vh-100 p-0">
                <div id="newChatBtn" class="p-2">
                    <a href="./index.php" class="d-flex align-items-center text-white btn btn-outline-secondary w-100 d-flex col-align-self-start m-0"><span class="fs-4 ms-1 me-3">+</span><span class="fs-6">New chat</span></a>
                </div>
                
                <div id="nav" class="w-100 p-2">  
                    <hr class="bg-danger border-2 border-top border-dark-subtle">
                    <div class="form-check form-switch align-self-start col-1 ms-1" style="width: fit-content;">
                        <input class="form-check-input" style="cursor: pointer;" type="checkbox" id="debugBox">
                        <label class="form-check-label" for="debugBox">Débug mode</label>
                    </div>
                    <div class="form-check form-switch align-self-start col-1 ms-1" style="width: fit-content;">
                        <input class="form-check-input" style="cursor: pointer;" type="checkbox" id="grootBox">
                        <label class="form-check-label" for="grootBox">Groot mode</label>
                    </div>
                    <a class="btn btn-dark d-flex col-align-self-start" href="#" role="button"><i class="bi bi-moon pe-2"></i>Dark mode</a>
                    <a class="btn btn-dark d-flex col-align-self-start" href="#" role="button"><i class="bi bi-discord pe-2"></i>OpenAI Discord</a>
                    <a class="btn btn-dark d-flex col-align-self-start" href="#" role="button"><i class="bi bi-box-arrow-up-right pe-2"></i>Updates & FAQ</a>
                    <a class="btn btn-dark d-flex col-align-self-start" href="#" role="button"><i class="bi bi-box-arrow-right pe-2"></i>Log out</a>
                </div>
            </div>
        </div>
    </nav>