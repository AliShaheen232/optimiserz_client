"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
var react_1 = require("react");
var validation_1 = require("../../lib/validation");
var lucide_react_1 = require("lucide-react");
var initialFormData = {
    fullName: "",
    businessEmail: "",
    companyName: "",
    serviceCategory: "",
    estimatedBudget: "",
    projectDetails: "",
    consent: false,
};
var Contact = function () {
    var _a = (0, react_1.useState)(initialFormData), formData = _a[0], setFormData = _a[1];
    var _b = (0, react_1.useState)({}), errors = _b[0], setErrors = _b[1];
    var _c = (0, react_1.useState)(false), isSubmitting = _c[0], setIsSubmitting = _c[1];
    var _d = (0, react_1.useState)("idle"), submitStatus = _d[0], setSubmitStatus = _d[1];
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value, type = _a.type;
        if (type === "checkbox") {
            var checked_1 = e.target.checked;
            setFormData(function (prev) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a[name] = checked_1, _a)));
            });
        }
        else {
            setFormData(function (prev) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
            });
        }
        // Clear field-specific validation error on change
        if (errors[name]) {
            setErrors(function (prev) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a[name] = undefined, _a)));
            });
        }
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        var validationErrors = (0, validation_1.validateInquiryForm)(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setIsSubmitting(true);
        // Honest handling: simulate submission latency and display developer-mode confirmation
        setTimeout(function () {
            setIsSubmitting(false);
            setSubmitStatus("success_dev");
        }, 600);
    };
    return (<section id="contact" className="py-20 border-t border-[#27334A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F7F9FC] tracking-tight">
            Have Something in Mind?
          </h2>
          <p className="mt-3 text-base text-[#A7B2C5] leading-relaxed">
            Tell us a little about what you're building, what needs to improve,
            or where you need technical help. We'll use that information to
            understand your requirements and discuss possible next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-8 bg-[#151E32] border border-[#27334A] rounded-2xl p-6 sm:p-8">
            {submitStatus === "success_dev" ? (<div className="space-y-4 py-6">
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/80 text-emerald-200 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-emerald-100">
                    <lucide_react_1.CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0"/>
                    Validation Passed &amp; Inquiry Captured
                  </div>
                  <p className="text-xs text-emerald-200/90 leading-relaxed">
                    <strong>Development Mode Notice:</strong> Form validation
                    succeeded and your inquiry data is verified. Because a
                    production email gateway or CRM backend has not been
                    connected to this environment yet, no live outbound email
                    was sent.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#11182A] border border-[#27334A] text-xs font-mono text-[#A7B2C5] space-y-1">
                  <div>
                    <strong>Name:</strong> {formData.fullName}
                  </div>
                  <div>
                    <strong>Email:</strong> {formData.businessEmail}
                  </div>
                  <div>
                    <strong>Service:</strong> {formData.serviceCategory}
                  </div>
                  <div>
                    <strong>Company:</strong>{" "}
                    {formData.companyName || "Not specified"}
                  </div>
                </div>

                <button type="button" onClick={function () {
                setFormData(initialFormData);
                setSubmitStatus("idle");
            }} className="px-4 py-2 text-xs font-semibold text-white bg-[#6366F1] rounded-lg hover:bg-[#5254e0] transition-colors">
                  Submit Another Inquiry
                </button>
              </div>) : (<form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-medium text-[#F7F9FC] mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Jane Doe" className={"w-full px-3.5 py-2.5 bg-[#0B1020] border ".concat(errors.fullName ? "border-red-500" : "border-[#27334A]", " rounded-lg text-sm text-[#F7F9FC] placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#6366F1]")}/>
                    {errors.fullName && (<p className="mt-1 text-xs text-red-400">
                        {errors.fullName}
                      </p>)}
                  </div>

                  {/* Business Email */}
                  <div>
                    <label htmlFor="businessEmail" className="block text-xs font-medium text-[#F7F9FC] mb-1.5">
                      Business Email <span className="text-red-400">*</span>
                    </label>
                    <input type="email" id="businessEmail" name="businessEmail" value={formData.businessEmail} onChange={handleChange} placeholder="jane@company.com" className={"w-full px-3.5 py-2.5 bg-[#0B1020] border ".concat(errors.businessEmail
                ? "border-red-500"
                : "border-[#27334A]", " rounded-lg text-sm text-[#F7F9FC] placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#6366F1]")}/>
                    {errors.businessEmail && (<p className="mt-1 text-xs text-red-400">
                        {errors.businessEmail}
                      </p>)}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* Company Name */}
                  <div>
                    <label htmlFor="companyName" className="block text-xs font-medium text-[#F7F9FC] mb-1.5">
                      Company Name{" "}
                      <span className="text-[#A7B2C5] text-[10px]">
                        (Optional)
                      </span>
                    </label>
                    <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Acme Corp" className="w-full px-3.5 py-2.5 bg-[#0B1020] border border-[#27334A] rounded-lg text-sm text-[#F7F9FC] placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#6366F1]"/>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label htmlFor="serviceCategory" className="block text-xs font-medium text-[#F7F9FC] mb-1.5">
                      Service of Interest{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <select id="serviceCategory" name="serviceCategory" value={formData.serviceCategory} onChange={handleChange} className={"w-full px-3.5 py-2.5 bg-[#0B1020] border ".concat(errors.serviceCategory
                ? "border-red-500"
                : "border-[#27334A]", " rounded-lg text-sm text-[#F7F9FC] focus:outline-none focus:ring-2 focus:ring-[#6366F1]")}>
                      <option value="">Select a service...</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Blockchain Development">
                        Blockchain Development
                      </option>
                      <option value="Artificial Intelligence">
                        Artificial Intelligence
                      </option>
                      <option value="Agentic AI & Automation">
                        Agentic AI &amp; Automation
                      </option>
                      <option value="Mailbox Services & Bulk Email">
                        Mailbox Services &amp; Bulk Email
                      </option>
                      <option value="Multiple Services">
                        Multiple Services
                      </option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.serviceCategory && (<p className="mt-1 text-xs text-red-400">
                        {errors.serviceCategory}
                      </p>)}
                  </div>

                  {/* Estimated Budget */}
                  <div>
                    <label htmlFor="estimatedBudget" className="block text-xs font-medium text-[#F7F9FC] mb-1.5">
                      Estimated Budget{" "}
                      <span className="text-[#A7B2C5] text-[10px]">
                        (Optional)
                      </span>
                    </label>
                    <select id="estimatedBudget" name="estimatedBudget" value={formData.estimatedBudget} onChange={handleChange} className="w-full px-3.5 py-2.5 bg-[#0B1020] border border-[#27334A] rounded-lg text-sm text-[#F7F9FC] focus:outline-none focus:ring-2 focus:ring-[#6366F1]">
                      <option value="">Prefer to discuss</option>
                      <option value="Under $5,000">Under $5,000</option>
                      <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                      <option value="$15,000 - $35,000">
                        $15,000 - $35,000
                      </option>
                      <option value="$35,000+">$35,000+</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="projectDetails" className="block text-xs font-medium text-[#F7F9FC] mb-1.5">
                    Project Details <span className="text-red-400">*</span>
                  </label>
                  <textarea id="projectDetails" name="projectDetails" rows={4} value={formData.projectDetails} onChange={handleChange} placeholder="Briefly describe what you are looking to build, technical requirements, or key timeline goals..." className={"w-full px-3.5 py-2.5 bg-[#0B1020] border ".concat(errors.projectDetails
                ? "border-red-500"
                : "border-[#27334A]", " rounded-lg text-sm text-[#F7F9FC] placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#6366F1]")}/>
                  {errors.projectDetails && (<p className="mt-1 text-xs text-red-400">
                      {errors.projectDetails}
                    </p>)}
                </div>

                {/* Consent checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input type="checkbox" id="consent" name="consent" checked={formData.consent} onChange={handleChange} className="mt-1 h-4 w-4 rounded border-[#27334A] bg-[#0B1020] text-[#6366F1] focus:ring-[#6366F1]"/>
                  <label htmlFor="consent" className="text-xs text-[#A7B2C5] leading-normal">
                    I agree to allow Optimiserz to contact me regarding this
                    inquiry. No unsolicited marketing will be sent.
                  </label>
                </div>
                {errors.consent && (<p className="text-xs text-red-400">{errors.consent}</p>)}

                {/* Submit button */}
                <div className="pt-2">
                  <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#6366F1] hover:bg-[#5254e0] disabled:opacity-60 active:scale-[0.98] rounded-lg shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]">
                    {isSubmitting ? ("Processing...") : (<>
                        Send Project Inquiry
                        <lucide_react_1.Send className="w-4 h-4 ml-2"/>
                      </>)}
                  </button>
                </div>
              </form>)}
          </div>

          {/* Right Column: Direct Info & Communication Guarantee */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#151E32] border border-[#27334A] rounded-2xl p-6 space-y-4">
              <h3 className="text-base font-bold text-[#F7F9FC]">
                Direct Contact
              </h3>
              <p className="text-xs text-[#A7B2C5] leading-relaxed">
                Prefer to write directly? Reach our technical leads via email:
              </p>
              <div className="p-3 rounded-lg bg-[#0B1020] border border-[#27334A] text-xs font-mono text-[#38BDF8]">
                contact@optimiserz.com
              </div>
            </div>

            <div className="bg-[#151E32] border border-[#27334A] rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#F7F9FC]">
                <lucide_react_1.Info className="w-4 h-4 text-[#38BDF8]"/>
                What to Expect
              </div>
              <ul className="text-xs text-[#A7B2C5] space-y-2 list-disc list-inside">
                <li>
                  We review your inquiry and assess technical feasibility.
                </li>
                <li>
                  We schedule a focused discussion rather than high-pressure
                  sales calls.
                </li>
                <li>
                  You receive a clear scope outline and candid recommendations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>);
};
exports.Contact = Contact;
