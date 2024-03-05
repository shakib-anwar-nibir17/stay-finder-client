const SignUpBanner = () => {
  return (
    <>
      {/* register design side  */}
      <div className="relative hidden h-full items-center justify-center bg-[#00B98E] md:flex md:w-[60%] lg:w-[40%]">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-medium text-white/80 ">
            Welcome To Stay Finder
          </h2>
          <p className="animate-pulse text-sm text-white/60">
            Please Enter You Information
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpBanner;
