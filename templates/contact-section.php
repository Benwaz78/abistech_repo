 <!-- Request Back Start -->
        <div class="request-back-area section-padding30" id="email-form">
            <div class="container">
                <div class="row d-flex justify-content-between">
                    <div class="col-xl-4 col-lg-5 col-md-5" id="home-contact">
                        <div class="request-content">
                            <h3>Get in touch</h3>
                            <div class="media contact-info">
                                <span class="contact-info__icon"><i class="ti-home"></i></span>
                                <div class="media-body">
                                    <h3>Off Ajao Road Ikeja, Lagos.</h3>
                                    <p>15, Seriki Aro Street,</p>
                                </div>
                            </div>
                       <!--      <div class="media contact-info">
                                <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                                <div class="media-body">
                                    <h3>+1 253 565 2365</h3>
                                    <p>Mon to Fri 9am to 6pm</p>
                                </div>
                            </div> -->
                            <div class="media contact-info">
                                <span class="contact-info__icon"><i class="ti-email"></i></span>
                                <div class="media-body">
                                    <h3>info@abistechnologies.com.ng</h3>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-7 col-md-7">
                        <!-- Contact form Start -->
                        <div class="form-wrapper">
                           <?php echo $emailError ?>
                           <?php echo $emailSuccess ?>
                            <form id="contact-form" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>#email-form" method="POST">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-box  mb-30">
                                            <input type="text" name="name" placeholder="Name">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-box mb-30">
                                            <input type="email" name="email" placeholder="Email">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 mb-30">
                                        <div class="form-box mb-30">
                                            <input type="text" name="subject" placeholder="Subject">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 mb-30">
                                        <div class="form-box mb-30">
                                            <input type="text" name="phone" placeholder="Phone">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 mb-30">
                                        <div class="select-itms">
                                            <select name="service" id="select1" class="form-control">
                                                <option value="" selected="selected">Choose service</option>
                                                <option value="Power Solution">Power Solution</option>
                                                <option value="Electronic Security">Electronic Security</option>
                                                <option value="Telecom Services">Telecom Services</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 mb-30">
                                        <div class="form-box mb-30">
                                            <textarea name="message" placeholder="Message" cols="30" rows="10"></textarea>
                                        </div>
                                    
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4">
                                    <button type="submit" name="submit" class="send-btn">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>     <!-- Contact form End -->
                </div>
            </div>
        </div>
        <!-- Request Back End -->