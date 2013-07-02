/** \file
 *  Game Develop
 *  2008-2013 Florian Rival (Florian.Rival@gmail.com)
 */

#ifndef PLATFORMLOADER_H
#define PLATFORMLOADER_H
#include <string>
#include <boost/shared_ptr.hpp>
namespace gd { class Platform; }

namespace gd
{

/**
 * \brief Load a gd::Platform in memory from a file and add it to the manager.
 *
 * Platforms are expected to be compiled into shared library. The shared library
 * must provides the two C functions CreateGDPlatform and DestroyGDPlatform :
 \code
extern "C" gd::Platform * GD_API CreateGDPlatform();
extern "C" void GD_API DestroyGDPlatform();
 \endcode
 *
 * Platforms are expected to be singletons, so the DestroyGDPlatform is not passing
 * any pointer as argument.
 */
class GD_CORE_API PlatformLoader
{
public:

    /**
     * Load all the platforms available in a directory.
     *
     * \param dir The directory where platforms must be searched for.
     *
     * \todo For now, only GDCpp.dll and GDJS.dll are loaded.
     */
    static void LoadAllPlatformsInManager(std::string dir);

    /**
     * Load a specific platform.
     *
     * \param fullpath The path to the platform file.
     * \return Smart pointer to the loaded platform. Can be NULL ( if loading failed ).
     */
    static boost::shared_ptr<gd::Platform> LoadPlatformInManager(std::string fullpath);

private:
    PlatformLoader();
    virtual ~PlatformLoader() {};
};

}

#endif // PLATFORMLOADER_H
